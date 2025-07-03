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

export const SelectContainer = styled.div`
  position: relative;
`;

export const Select = styled.div`
  width: 100%;
`;

export const SelectTop = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5px;

  p {
    color: ${colors.lightSecondaryColor2};
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const OptionsContainer = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  max-height: ${({ $onSelect }) => ($onSelect ? '200px' : '0')};
  transition: max-height 0.5s ease;
  z-index: 1;
`;

export const OptionsSection = styled.div`
  border-radius: 0 0 15px 15px;
  background-color: ${colors.lightSecondaryColor};
  padding: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  transform: ${({ $onSelect }) =>
    $onSelect ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.5s ease-in-out;
`;

export const Option = styled.div`
  cursor: pointer;
  font-size: 24px;
  color: ${colors.lightPrimaryColor};
  text-transform: uppercase;
`;
