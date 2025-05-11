import styled from 'styled-components';
import * as colors from '../../config/colors';

export const RegisterContainer = styled.div`
  margin-top: 20px;
  background-color: ${colors.lightPrimaryColor};
  padding-top: 38px;
`;

export const Line = styled.hr`
  height: 2px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 42px;
  background-color: ${colors.primaryColor};
  padding: 60px 65px;
  border-radius: 70px 70px 0 0;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  color: ${colors.secondaryColor};
  font-size: 44px;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: ${colors.lightPrimaryColor};
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
`;
