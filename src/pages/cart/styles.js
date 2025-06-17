import styled, { css } from 'styled-components';
import * as colors from '../../config/colors';

const fullFlexColumn = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const titleStyle = css`
  text-align: center;
  font-weight: 400;
  color: ${colors.secondaryColor};
`;

export const CartContainer = styled.div`
  ${fullFlexColumn};
  margin-top: 20px;
`;

export const TitleContainer = styled.div`
  background-color: rgba(254, 233, 227, 0.3);
  padding-block: 5px 0;
`;

export const CartTitle = styled.h1`
  font-size: 30px;
  ${titleStyle};
`;

export const ProductContainer = styled.div`
  ${fullFlexColumn};
  gap: 22px;
  background-color: ${colors.lightPrimaryColor};
  padding: 40px 10px;
  justify-content: flex-start;
  align-items: ${props => (props.$isEmpty ? 'center' : 'none')};
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: ${colors.lightPrimaryColor};
  padding: 25px;
`;

export const CheckoutPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CheckoutText = styled.div`
  font-size: 33px;
  font-weight: 700;
  color: ${colors.lightSecondaryColor};
`;

export const CheckoutPrice = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${colors.secondaryColor};
`;

export const CheckoutButton = styled.button`
  background-color: ${colors.primaryColor};
  border-radius: 50px;
  padding: 15px 20px;
  font-family: 'Dongle', sans-serif;
  line-height: 100%;
  color: #fff;
  font-size: 40px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
