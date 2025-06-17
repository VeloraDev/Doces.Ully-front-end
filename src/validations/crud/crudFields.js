import * as Yup from 'yup';

export const nameField = Yup.string().required('O nome é obrigatorio!');
