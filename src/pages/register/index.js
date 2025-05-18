import React, { useState, useRef } from 'react';
import {
  RegisterContainer,
  Title,
  Form,
  Input,
  InputContainer,
  ActionButton,
} from './styles';

import { UserIcon, CellIcon, CadIcon, EyeCloseIcon } from '../../assets/index';
import { Line } from '../../styles/GlobalStyles';

import { toast } from 'react-toastify';

function Register() {
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);

  const userRef = useRef(null);
  const phoneRef = useRef(null);
  const passRef = useRef(null);
  const confirmPassRef = useRef(null);

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
      <Form action={'/cadastro'} method="POST" onSubmit={handleSubmit}>
        <Title>CADASTRO</Title>
        <InputContainer>
          <Input onClick={() => userRef.current?.focus()}>
            <UserIcon />
            <input
              ref={userRef}
              type="text"
              placeholder="Usuário"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
          </Input>

          <Input onClick={() => phoneRef.current?.focus()}>
            <CellIcon />
            <input
              ref={phoneRef}
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </Input>

          <Input onClick={() => passRef.current?.focus()}>
            <CadIcon />
            <input
              type={isVisible ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              ref={passRef}
            />
            <EyeCloseIcon onClick={() => setIsVisible(prev => !prev)} />
          </Input>

          <Input onClick={() => confirmPassRef.current?.focus()}>
            <CadIcon />
            <input
              type={confirmIsVisible ? 'text' : 'password'}
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              ref={confirmPassRef}
            />
            <EyeCloseIcon onClick={() => setConfirmIsVisible(prev => !prev)} />
          </Input>
        </InputContainer>
        <ActionButton>Cadastrar</ActionButton>
      </Form>
    </RegisterContainer>
  );
}

export default Register;
