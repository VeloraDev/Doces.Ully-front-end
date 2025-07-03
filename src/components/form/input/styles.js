import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const InputContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${colors.background};
  border-radius: 15px;
  border: 2px solid ${colors.borderColor};

  input {
    font-size: 30px;
    height: 30px;
  }

  input::placeholder {
    color: ${colors.textCardColor};
  }
`;
