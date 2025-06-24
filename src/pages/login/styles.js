import styled, { css } from 'styled-components';
import * as colors from '../../config/colors';

const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  background-color: rgba(254, 233, 227, 0.3);
  display: flex;
  flex: 1;
`;

export const Form = styled.form`
  ${flexColumnCenter};
  width: 100%;
  margin-top: 100px;
  background-color: ${colors.lightPrimaryColor};
  padding: 40px 0;
  border-radius: 70px 70px 0 0;
  box-sizing: border-box;
  z-index: 1;
`;

export const InputContainer = styled.div`
  ${flexColumnCenter};
  gap: 22px;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 16px;

  p,
  a {
    font-size: 30px;
  }

  p {
    color: ${colors.lightSecondaryColor2};
  }

  a {
    color: ${colors.secondaryColor};
    border-bottom: 2px solid ${colors.secondaryColor};
    text-decoration: none;
  }
`;
