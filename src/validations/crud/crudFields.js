import * as Yup from 'yup';

export const nameField = Yup.string().trim().required('O nome é obrigatório.');

export const priceField = Yup.number()
  .typeError('O preço deve ser um número válido.')
  .positive('O preço deve ser maior que zero.')
  .required('O preço é obrigatório.');

export const quantityField = Yup.number()
  .typeError('A quantidade deve ser um número válido.')
  .integer('A quantidade deve ser um número inteiro.')
  .positive('A quantidade deve ser maior que zero.')
  .required('A quantidade é obrigatória.');

export const descriptionField = Yup.string()
  .trim()
  .min(5, 'A descrição deve ter pelo menos 5 caracteres.')
  .required('A descrição é obrigatória.');

export const imagePostField = Yup.mixed()
  .required('A imagem é obrigatória.')
  .test(
    'fileType',
    'Formato de imagem não suportado. Use JPG, PNG ou GIF.',
    value =>
      value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
  );

export const imagePutField = Yup.mixed()
  .notRequired()
  .test(
    'fileType',
    'Formato de imagem não suportado. Use JPG, PNG ou GIF.',
    value => {
      if (!value) return true;
      return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
    }
  );

export const categoryField = Yup.string().required(
  'A categoria é obrigatória.'
);
