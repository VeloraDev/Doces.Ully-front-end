import React, { useState, useRef } from 'react';
import { RegisterContainer, Form, Input, InputContainer } from './styles';
import User from '../../assets/icons/user-icon.svg';
import Cell from '../../assets/icons/cell-icon.svg';
import Cad from '../../assets/icons/cad-icon.svg';
import EyeClose from '../../assets/icons/eyeClose-icon.svg';

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

  function handleSubmit() {}

  return (
    <RegisterContainer>
      <hr />
      <Form action={'/cadastro'} method="POST" onSubmit={handleSubmit}>
        <InputContainer>
          <Input onClick={() => userRef.current?.focus()}>
            <img src={User} />
            <input
              ref={userRef}
              type="text"
              placeholder="Usuário"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
          </Input>

          <Input onClick={() => phoneRef.current?.focus()}>
            <img src={Cell} />
            <input
              ref={phoneRef}
              type="text"
              placeholder="Telefone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </Input>

          <Input onClick={() => passRef.current?.focus()}>
            <img src={Cad} />
            <input
              type={isVisible ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              ref={passRef}
            />
            <img onClick={() => setIsVisible(prev => !prev)} src={EyeClose} />
          </Input>

          <Input onClick={() => confirmPassRef.current?.focus()}>
            <img src={Cad} />
            <input
              type={confirmIsVisible ? 'text' : 'password'}
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              ref={confirmPassRef}
            />
            <img
              onClick={() => setConfirmIsVisible(prev => !prev)}
              src={EyeClose}
            />
          </Input>
        </InputContainer>
        <button>Cadastrar</button>
      </Form>
    </RegisterContainer>
  );
}

export default Register;
