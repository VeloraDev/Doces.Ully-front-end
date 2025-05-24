import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CartContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  background-color: rgba(254, 233, 227, 0.3);
  padding-block: 5px 15px;
`;

export const CartTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  color: ${colors.secondaryColor};
`;

export const ProductContainer = styled.div`
  background-color: ${colors.lightPrimaryColor};
  padding: 40px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: ${props => (props.$isEmpty ? 'center' : 'none')};
  flex-direction: column;
  gap: 22px;
`;

export const CheckoutContainer = styled.div`
  background-color: ${colors.lightPrimaryColor};
  padding: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
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
