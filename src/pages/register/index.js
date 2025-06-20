import React, { useState, useRef } from 'react';
import { RegisterContainer, Form, InputContainer } from './styles';
import {
  UserIcon,
  CellIcon,
  CadIcon,
  EyeCloseIcon,
  CadastroTextIcon,
} from '../../assets/index';
import { Line, ActionButton } from '../../styles/ComponentsStyles';

import axios from '../../services/axios';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../styles/ComponentsStyles';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from '../../validations/user-admin/userSchema';

function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);
  const navigate = useNavigate();

  const refs = {
    name: useRef(null),
    phone: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema({ role: 'client', mode: 'register' })),
  });

  async function onSubmit({ name, indentifier, password }) {
    try {
      await axios.post('/clients', {
        name,
        phone: indentifier,
        password,
      });
      toast.success('Conta criada com sucesso!');
      navigate('/login');
    } catch (error) {
      const errors = error.response?.data?.errors ?? 'Ocorreu um erro!';

      if (errors.length > 0) {
        errors.map(erro => toast.error(erro));
      }
    }
  }

  function onError(formErrors) {
    Object.values(formErrors).forEach(error => {
      toast.error(error.message);
    });
  }

  return (
    <RegisterContainer>
      <Line />
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <CadastroTextIcon />

        <InputContainer>
          <Input onClick={() => refs.name.current?.focus()}>
            <UserIcon />
            <input
              ref={refs.name}
              type="text"
              placeholder="Nome"
              {...register('name')}
            />
          </Input>

          <Input onClick={() => refs.phone.current?.focus()}>
            <CellIcon />
            <input
              ref={refs.phone}
              type="text"
              placeholder="Telefone"
              {...register('indentifier')}
            />
          </Input>

          <Input onClick={() => refs.password.current?.focus()}>
            <CadIcon />
            <input
              ref={refs.password}
              type={isVisible ? 'text' : 'password'}
              placeholder="Senha"
              {...register('password')}
            />
            <EyeCloseIcon onClick={() => setIsVisible(prev => !prev)} />
          </Input>

          <Input onClick={() => refs.confirmPassword.current?.focus()}>
            <CadIcon />
            <input
              ref={refs.confirmPassword}
              type={confirmIsVisible ? 'text' : 'password'}
              placeholder="Confirmar senha"
              {...register('confirmPassword')}
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
