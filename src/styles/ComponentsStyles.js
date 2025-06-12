import styled from 'styled-components';
import * as colors from '../config/colors';

//------------------------------------------------------
//CARROSSEL PRODUCTS
export const CardsContainer = styled.div`
  display: flex;
  gap: 28px;
  padding: ${props =>
    props.$isHome ? '40px 16px 35px 16px' : '30px 16px 15px 16px'};
  background-color: ${colors.lightPrimaryColor};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
`;
//------------------------------------------------------

//------------------------------------------------------
//PRODUCT CARD CATEGORY
//PRODUCT CARD CART
export const ProductCard = styled.div`
  display: flex;
  gap: 15px;
  background-color: #fff;
  border-radius: 12px;
  padding: 5px;
  min-height: 95px;
  max-width: 576px;
`;

export const ProductImage = styled.img`
  width: 105px;
  height: 95px;
  background-color: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
`;

export const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FavButton = styled.button`
  background-color: transparent;
  border-radius: 100%;
  height: 35px;
`;

export const ContentDown = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
//------------------------------------------------------

//------------------------------------------------------
//INPUT
export const Input = styled.div`
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
//------------------------------------------------------
