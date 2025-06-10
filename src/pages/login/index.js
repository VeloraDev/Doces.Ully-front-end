import React, { useState, useRef, useCallback } from 'react';
import {
  LoginContainer,
  Form,
  InputContainer,
  ActionButton,
  TextContainer,
} from './styles';
import { Input, Line } from '../../styles/ComponentsStyles';
import { UserIcon, CellIcon, LoginTextIcon } from '../../assets/index';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const refs = {
    name: useRef(null),
    phone: useRef(null),
  };

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;
    const soNumeros = /^\d+$/;

    if (name.length < 3 || name.length > 20) {
      toast.error('Nome precisa ter entre 3 e 20 caracteres!');
      formErrors = true;
    }

    if (!soNumeros.test(phone)) {
      toast.error('Telefone só pode conter números!');
      formErrors = true;
    }

    if (formErrors) return;
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
          <Input onClick={() => refs.name.current?.focus()}>
            <UserIcon />
            <input
              ref={refs.name}
              type="text"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Input>

          <Input onClick={() => refs.phone.current?.focus()}>
            <CellIcon />
            <input
              type="text"
              ref={refs.phone}
              placeholder="Telefone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
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
