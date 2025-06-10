import React, { useState, useRef } from 'react';
import {
  RegisterContainer,
  Form,
  InputContainer,
  ActionButton,
} from './styles';
import {
  UserIcon,
  CellIcon,
  CadIcon,
  EyeCloseIcon,
  CadastroTextIcon,
} from '../../assets/index';

import { Line } from '../../styles/ComponentsStyles';
import { Input } from '../../styles/ComponentsStyles';
import { toast } from 'react-toastify';

function Register() {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);

  const refs = {
    user: useRef(null),
    phone: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
  };

  function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;
    const soNumeros = /^\d+$/;

    if (user.length < 3 || user.length > 20) {
      toast.error('Nome precisa ter entre 3 e 20 caracteres!');
      formErrors = true;
    }

    if (!soNumeros.test(phone)) {
      toast.error('Telefone só pode conter números!');
      formErrors = true;
    }

    if (phone.length !== 11) {
      toast.error('Telefone precisa ter 11 números!');
      formErrors = true;
    }

    if (
      password.length < 3 ||
      password.length > 10 ||
      password !== confirmPassword
    ) {
      toast.error('As senhas não conferem!');
      toast.error('A senha precisa ter entre 3 e 10 caracteres!');
      formErrors = true;
    }

    if (soNumeros.test(password)) {
      toast.error('A senha precisa ter letras!');
      formErrors = true;
    }

    if (formErrors) return;
  }

  return (
    <RegisterContainer>
      <Line />
      <Form onSubmit={handleSubmit}>
        <CadastroTextIcon />

        <InputContainer>
          <Input onClick={() => refs.user.current?.focus()}>
            <UserIcon />
            <input
              ref={refs.user}
              type="text"
              placeholder="Usuário"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
          </Input>

          <Input onClick={() => refs.phone.current?.focus()}>
            <CellIcon />
            <input
              ref={refs.phone}
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
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
            <EyeCloseIcon onClick={() => setIsVisible(prev => !prev)} />
          </Input>

          <Input onClick={() => refs.confirmPassword.current?.focus()}>
            <CadIcon />
            <input
              ref={refs.confirmPassword}
              type={confirmIsVisible ? 'text' : 'password'}
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <EyeCloseIcon onClick={() => setConfirmIsVisible(prev => !prev)} />
          </Input>
        </InputContainer>

        <ActionButton>
          <p>Cadastrar</p>
        </ActionButton>
      </Form>
    </RegisterContainer>
  );
}

export default Register;
