import * as Yup from 'yup';

export const nameField = Yup.string().required('Nome é obrigatório');

export const phoneField = Yup.string()
  .matches(/^\d+$/, 'Telefone só pode conter números!')
  .length(11, 'Telefone deve conter 11 números!');

export const emailField = Yup.string()
  .email('Digite um email válido')
  .required('Email é obrigatório');

export const passwordField = Yup.string()
  .min(8, 'A senha deve conter no mínimo 8 caracteres!')
  .required('Senha é obrigatória');

export const passwordFieldAdmin = Yup.string().required('Senha é obrigatória');

export const confirmPasswordField = Yup.string()
  .oneOf([Yup.ref('password'), null], 'As senhas não conferem!')
  .required('Confirmação de senha é obrigatória');
