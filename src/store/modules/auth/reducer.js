import * as types from './types';
import { toast } from 'react-toastify';

const initialState = {
  isLoggedIn: false,
  user: {},
  isLoading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }

    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.user = {
        indentifier: action.payload.indentifier,
        type: action.payload.role,
      };
      newState.isLoading = false;
      return newState;
    }

    case types.LOGIN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.errors };
    }

    case types.LOGOUT_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }

    case types.LOGOUT_SUCCESS: {
      toast.info(
        `${state.user.type === 'admin' ? 'Administrador' : 'Cliente'} deslogado!`
      );
      return initialState;
    }

    case types.LOGOUT_FAILURE: {
      return { ...state, isLoading: false, error: action.payload?.errors };
    }

    default:
      return state;
  }
}
