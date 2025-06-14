import styled, { css } from 'styled-components';
import * as colors from '../../config/colors';

export const OrderContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const AddressContainer = styled.div`
  background-color: ${colors.lightPrimaryColor};
  padding: 15px 25px 40px 25px;
  flex: 1;
`;

export const Title = styled.h1`
  color: ${colors.secondaryColor};
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const OptionPaymentSection = styled.div`
  max-width: 250px;
  width: 80%;
  margin: 25px auto 0;
  border: 4px solid ${colors.lightSecondaryColor2};
  border-radius: 50px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  background-color: ${colors.lightSecondaryColor2};
  width: 60%;
  height: 100%;
  border-radius: 50px;
  transform: ${({ $select }) =>
    $select === 'entrega' ? 'translateX(0)' : 'translateX(66.66%)'};
  transition: transform 0.5s ease-in-out;
`;

export const ActionPaymentButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  background-color: transparent;
  border-radius: 50px;
  z-index: 1;
`;

export const ParagraphButton = styled.p`
  color: ${({ $select }) =>
    $select ? `${colors.lightPrimaryColor}` : `${colors.lightSecondaryColor2}`};
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: min-content;
  line-height: 100%;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const InputSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const DivInput = styled.div`
  position: relative;
  padding: 6px 14px;
  display: flex;
  align-items: center;
  border: 3px solid ${colors.lightSecondaryColor2};
  border-radius: 50px;
  gap: 7px;

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
  z-index: ${({ $onSelect }) => ($onSelect ? '1' : '0')};
`;

export const OptionsSection = styled.div`
  border-radius: 0 0 15px 15px;
  background-color: ${colors.lightSecondaryColor};
  padding: 10px;
  display: flex;
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

export const CheckoutSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    max-width: max-content;
    padding: 6px 20px;
    border-radius: 50px;

    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

export const Paragraph = styled.p`
  color: ${colors.secondaryColor};
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

export const ActionValue = styled.button`
  border: 2px solid ${colors.secondaryColor};
  background-color: transparent;
  color: ${colors.secondaryColor};
`;

export const ActionOrder = styled.button`
  color: ${colors.lightPrimaryColor};
  background-color: ${colors.secondaryColor};
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
