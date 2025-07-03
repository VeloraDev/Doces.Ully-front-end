import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const DivInput = styled.div`
  position: relative;
  padding: 6px 14px;
  display: flex;
  align-items: center;
  border: 3px solid ${colors.lightSecondaryColor2};
  border-radius: ${({ $isDescription }) => ($isDescription ? '20px' : '50px')};
  gap: 7px;
  width: 100%;
  height: ${({ $isDescription }) => ($isDescription ? '100px' : 'auto')};

  textArea {
    font-size: 24px;
    font-family: 400;
    line-height: 100%;
  }

  input {
    font-size: 24px;
    height: 24px;
  }

  label {
    position: absolute;
    padding: 0 2px;
    top: -8px;
    background-color: ${colors.lightPrimaryColor};
    font-size: 18px;
    color: ${colors.lightSecondaryColor2};
    font-weight: 500;
    text-transform: uppercase;
  }

  input::placeholder {
    font-size: 22px;
    color: ${colors.lightSecondaryColor2};
    font-weight: 500;
    text-transform: uppercase;
  }
`;
