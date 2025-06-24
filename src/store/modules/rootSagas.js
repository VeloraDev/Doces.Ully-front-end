import { all } from 'redux-saga/effects';
import authSagas from './auth/sagas';

export default function* rootSagas() {
  return yield all([authSagas]);
}
