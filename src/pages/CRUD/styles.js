import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CrudContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;
  padding: 30px;
  flex: 1;
  background-color: ${colors.lightPrimaryColor};
  margin-top: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.secondaryColor};
  font-size: 25px;
  text-transform: uppercase;
`;

export const CrudForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    max-width: 60%;
    text-align: center;
    margin-top: 0;
    p {
      font-size: 30px;
      text-transform: uppercase;
    }
  }
`;
