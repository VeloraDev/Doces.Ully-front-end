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

import axios from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { Line } from '../../styles/ComponentsStyles';
import { Input } from '../../styles/ComponentsStyles';
import { toast } from 'react-toastify';

function Register() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);

  const navigate = useNavigate();

  const refs = {
    name: useRef(null),
    phone: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
  };

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;
    const soNumeros = /^\d+$/;

    /* if (name.length < 3 || name.length > 20) {
      toast.error('Nome precisa ter entre 3 e 20 caracteres!');
      formErrors = true;
    } */

    if (!soNumeros.test(phone)) {
      toast.error('Telefone só pode conter números!');
      formErrors = true;
    }

    if (phone.length !== 11) {
      toast.error('Telefone precisa ter 11 números!');
      formErrors = true;
    }

    if (password.length < 8) {
      toast.error('A senha deve possuir no mínimo 8 caracteres!');
      formErrors = true;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não conferem!');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      await axios.post('/clients', {
        name: name,
        phone: phone,
        password: password,
      });
      toast.success('Conta criada com sucesso!');
      navigate('/login');
    } catch (error) {
      const status = error.response?.status ?? 0;
      const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';

      if (errors.length > 0) {
        errors.map(erro => toast.error(erro));
      }
    }
  }

  return (
    <RegisterContainer>
      <Line />
      <Form onSubmit={handleSubmit}>
        <CadastroTextIcon />

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
