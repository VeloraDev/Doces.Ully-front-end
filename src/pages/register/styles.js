import styled from 'styled-components';
import * as colors from '../../config/colors';

export const RegisterContainer = styled.div`
  margin-top: 55px;
  background-color: rgba(254, 233, 227, 0.3);
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
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  width: 100%;
`;
