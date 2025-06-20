import { call, put, all, takeLatest } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist';
import { toast } from 'react-toastify';

import * as types from '../types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const { role, indentifier, password, navigate } = payload;
    const body =
      role === 'admin'
        ? { email: indentifier, password }
        : { phone: indentifier, password };

    const route = role === 'admin' ? '/admin/login' : '/clients/login';
    const { data } = yield call(axios.post, route, body);
    yield put(actions.loginSuccess({ ...data, indentifier, role }));

    axios.defaults.headers.Authorization = `Bearer ${data.token}`;

    toast.success(`${role === 'admin' ? 'Administrador' : 'Cliente'} logado`);
    navigate('/');
  } catch (error) {
    const errors = error.response?.data?.errors;

    if (Array.isArray(errors)) {
      errors.forEach(erro => toast.error(erro));
    } else if (typeof errors === 'string') {
      toast.error(errors);
    }
    yield put(actions.loginFailure());
  }
}

function* persistRehydrate({ payload }) {
  const token = payload?.auth?.token ?? '';
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(REHYDRATE, persistRehydrate),
]);
