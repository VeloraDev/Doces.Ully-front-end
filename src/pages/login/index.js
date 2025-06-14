import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  LoginContainer,
  Form,
  InputContainer,
  ActionButton,
  TextContainer,
} from './styles';
import {
  CellIcon,
  LoginTextIcon,
  CadIcon,
  EyeCloseIcon,
  EmailIcon,
} from '../../assets/index';

import { Input, Line } from '../../styles/ComponentsStyles';

import * as actions from '../../store/modules/auth/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login({ role }) {
  const [indentifier, setIndentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const prevPath = location.state?.from?.pathName || '/';

  const condition = {
    icon: role === 'client' ? <CellIcon /> : <EmailIcon />,
    placeholder: role === 'client' ? 'Telefone' : 'Email',
  };

  const refs = {
    indentifier: useRef(null),
    password: useRef(null),
  };

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;
    const onlyNumbers = /^\d+$/;
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (role === 'client') {
      if (!onlyNumbers.test(indentifier)) {
        toast.error('Telefone só pode conter números!');
        formErrors = true;
      }

      if (indentifier.length !== 11) {
        toast.error('Telefone deve conter 11 números!');
        formErrors = true;
      }

      if (password.length < 8) {
        toast.error('A senha deve conter no mínimo 8 caracteres!');
        formErrors = true;
      }
    } else {
      if (!isEmail.test(indentifier)) {
        toast.error('Digite um email válido');
        formErrors = true;
      }
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ role, indentifier, password }));
  }

  const goToRegister = useCallback(() => {
    navigate('/cadastro');
  }, [navigate]);

  return (
    <LoginContainer>
      <Line />
      <Form onSubmit={handleSubmit}>
        <LoginTextIcon />

        <InputContainer>
          <Input onClick={() => refs.indentifier.current?.focus()}>
            {condition.icon}
            <input
              ref={refs.indentifier}
              type="text"
              placeholder={condition.placeholder}
              value={indentifier}
              onChange={e => setIndentifier(e.target.value)}
            />
          </Input>

          <Input onClick={() => refs.password.current?.focus()}>
            <CadIcon />
            <input
              ref={refs.password}
              type={isVisible ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <EyeCloseIcon onClick={() => setIsVisible(!isVisible)} />
          </Input>
        </InputContainer>

        <ActionButton type="submit">
          <h1>Entrar</h1>
        </ActionButton>

        <TextContainer>
          <p>Não tem uma conta ainda?</p>
          <a onClick={goToRegister}>Crie uma</a>
        </TextContainer>
      </Form>
    </LoginContainer>
  );
}

export default Login;
