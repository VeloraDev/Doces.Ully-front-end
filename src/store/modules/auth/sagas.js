import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as types from './types';
import * as actions from './actions';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const { role, indentifier, password, navigate } = payload;
    const body =
      role === 'admin'
        ? { email: indentifier, password }
        : { phone: indentifier, password };

    const route = role === 'admin' ? 'auth/login/admin' : 'auth/login/client';
    const { data } = yield call(axios.post, route, body, {
      withCredentials: true,
    });
    yield put(actions.loginSuccess({ indentifier, role }));

    toast.success(`${data.message}!`);
    navigate('/');
  } catch (error) {
    const errors = error.response?.data?.errors;
    errors.forEach(erro => toast.error(erro));

    yield put(actions.loginFailure({ errors }));
  }
}

function* logoutRequest(payload) {
  try {
    const { navigate } = payload;
    yield call(axios.delete, '/auth/logout');
    yield put(actions.logoutSuccess());
    navigate('/');
  } catch (error) {
    const errors = error.response?.data?.errors;

    if (Array.isArray(errors)) {
      errors.forEach(erro => toast.info(erro));
    }

    yield put(actions.logoutFailure({ errors }));
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.LOGOUT_REQUEST, logoutRequest),
]);
