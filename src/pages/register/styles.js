import styled from 'styled-components';
import * as colors from '../../config/colors';

export const RegisterContainer = styled.div`
  margin-top: 20px;
  background-color: rgba(254, 233, 227, 0.3);
  padding-top: 38px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 42px;
  background-color: ${colors.lightPrimaryColor};
  padding: 40px 0;
  border-radius: 70px 70px 0 0;
  box-sizing: border-box;
  z-index: 1;
`;

export const Title = styled.h1`
  font-family: 'Dongle', sans-serif;
  font-size: 70px;
  color: ${colors.secondaryColor};
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  width: 100%;
`;

export const Input = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: ${colors.background};
  border-radius: 15px;
  border: 2px solid ${colors.borderColor};

  input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 18px;
    color: ${colors.secondaryColor};
  }
`;

export const ActionButton = styled.button`
  margin-top: 40px;
  background-color: ${colors.secondaryColor};
  color: #fff;
  padding: 12px 40px;
  border-radius: 30px;
  font-size: 26px;
  letter-spacing: 1px;
`;
