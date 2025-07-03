import { useCallback } from 'react';
import { LoginContainer, Form, InputContainer, TextContainer } from './styles';
import { LoginTextIcon } from '../../assets/index';
import Input from '../../components/form/input';
import { ActionButton } from '../../styles/ComponentsStyles';

import * as actions from '../../store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '../../validations/user-admin/userSchema';
import BreadCrumbs from '../../components/breadCrumbs';
import Loadingpage from '../../components/loadingPage';

function Login({ role }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(state => state.auth.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema({ role })) });

  function onSubmit({ indentifier, password }) {
    dispatch(actions.loginRequest({ role, indentifier, password, navigate }));
  }

  function onError(formErrors) {
    Object.values(formErrors).forEach(error => {
      toast.error(error.message);
    });
  }

  const goToRegister = useCallback(() => {
    navigate('/cadastro');
  }, [navigate]);

  const CrumbItems = [{ label: 'Página inicial', to: '/' }, { label: 'Login' }];

  return (
    <>
      {isLoading && <Loadingpage />}
      <BreadCrumbs items={CrumbItems} size="big"></BreadCrumbs>
      <LoginContainer>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <LoginTextIcon />

          <InputContainer>
            <Input
              typeField="phone"
              placeholder={role === 'client' ? 'Telefone' : 'Email'}
              register={register}
              field="indentifier"
            />

            <Input
              typeField="password"
              placeholder="Senha"
              register={register}
              field="password"
            />
          </InputContainer>

          <ActionButton type="submit">
            <p>Entrar</p>
          </ActionButton>

          <TextContainer>
            <p>Não tem uma conta ainda?</p>
            <a onClick={goToRegister}>Crie uma</a>
          </TextContainer>
        </Form>
      </LoginContainer>
    </>
  );
}

export default Login;
