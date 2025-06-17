import * as Yup from 'yup';
import { nameField } from './crudFields';

export function crudSchema({ mode }) {
  const body = {};

  if (mode === 'categoria') {
    body.name = nameField;
  }

  return Yup.object().shape(body);
}
