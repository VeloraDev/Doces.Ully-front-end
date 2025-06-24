import styled from 'styled-components';
import * as colors from '../../config/colors';

export const OrderContainer = styled.div`
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
    $select ? 'translateX(66.66%)' : 'translateX(0)'};
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
    $select === 'entrega'
      ? `${colors.lightPrimaryColor}`
      : `${colors.lightSecondaryColor2}`};
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

export const CheckoutSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    max-width: max-content;
    padding: 10px 15px;
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
  padding: 10px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`;
