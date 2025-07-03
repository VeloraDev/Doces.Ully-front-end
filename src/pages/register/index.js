import { RegisterContainer, Form, InputContainer } from './styles';
import { CadastroTextIcon } from '../../assets/index';
import { ActionButton } from '../../styles/ComponentsStyles';
import BreadCrumbs from '../../components/breadCrumbs';
import Input from '../../components/form/input';

import axios from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '../../validations/user-admin/userSchema';

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema({ role: 'client', mode: 'register' })),
  });

  async function onSubmit({ name, phone, password }) {
    try {
      await axios.post('/clients', {
        name,
        phone,
        password,
      });
      toast.success('Conta criada com sucesso!');
      navigate('/login');
    } catch (error) {
      const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';
      errors.forEach(erro => toast.error(erro));
    }
  }

  function onError(formErrors) {
    Object.values(formErrors).forEach(error => {
      toast.error(error.message);
    });
  }

  const CrumbItems = [
    { label: 'Página inicial', to: '/' },
    { label: 'Cadastro' },
  ];

  return (
    <>
      <BreadCrumbs items={CrumbItems} size="big"></BreadCrumbs>
      <RegisterContainer>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <CadastroTextIcon />

          <InputContainer>
            <Input
              typeField="name"
              placeholder="Nome"
              register={register}
              field="name"
            />

            <Input
              typeField="phone"
              placeholder="Telefone"
              register={register}
              field="phone"
            />

            <Input
              typeField="password"
              placeholder="Senha"
              register={register}
              field="password"
            />

            <Input
              typeField="confirmPassword"
              placeholder="Confirmar senha"
              register={register}
              field="confirmPassword"
            />
          </InputContainer>

          <ActionButton>
            <p>Cadastrar</p>
          </ActionButton>
        </Form>
      </RegisterContainer>
    </>
  );
}

export default Register;
