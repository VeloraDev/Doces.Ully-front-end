import * as Yup from 'yup';

export default function addressSchema() {
  return Yup.object().shape({
    neighborhood: Yup.string().required('Bairro é obrigátorio'),
    street: Yup.string().required('Rua é obrigatória'),
    number: Yup.string()
      .matches(/^\d+$/, 'O número só pode possuir números')
      .required('Número é obrigatório'),
    landmark: Yup.string(),
    payment_method: Yup.string().required('Método de pagamento é obrigatório'),
  });
}
