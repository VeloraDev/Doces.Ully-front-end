import * as Yup from 'yup';
import {
  phoneField,
  emailField,
  passwordField,
  passwordFieldAdmin,
  confirmPasswordField,
  nameField,
} from './userFields';

export function userSchema({ role, mode = 'login' }) {
  const body = {};

  if (role === 'client') {
    body.indentifier = phoneField;
    body.password = passwordField;
  } else {
    body.indentifier = emailField;
    body.password = passwordFieldAdmin;
  }

  if (mode === 'register') {
    body.name = nameField;
    body.confirmPassword = confirmPasswordField;
  }

  return Yup.object().shape(body);
}
