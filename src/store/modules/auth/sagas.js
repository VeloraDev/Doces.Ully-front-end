import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const { role, indentifier, password } = payload;
    const body =
      role === 'admin'
        ? { email: indentifier, password }
        : { phone: indentifier, password };

    const route = role === 'admin' ? '/admin/login' : '/clients/login';
    const { data } = yield call(axios.post, route, body);
    yield put(actions.loginSuccess({ ...data, indentifier, role }));

    axios.defaults.headers.Authorization = `Bearer ${data.token}`;

    toast.success('Usuário logado com sucesso!');
  } catch (error) {
    const status = error.response?.status;
    const errorMessage = error.response?.data?.error ?? 'Ocorreu um erro!';

    toast.error(errorMessage);

    yield put(actions.loginFailure());
  }
}

function* persistRehydrate({ payload }) {
  const token = payload.token ?? '';
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
