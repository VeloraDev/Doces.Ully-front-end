import styled from 'styled-components';
import * as colors from '../config/colors';

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

//PRODUCT CARD CATEGORY
//PRODUCT CARD CART
//--------------------------------
export const ProductCard = styled.div`
  display: flex;
  gap: 15px;
  background-color: #fff;
  border-radius: 12px;
  padding: 5px;
  min-height: 95px;
`;

export const ProductImage = styled.div`
  min-width: 95px;
  height: 100%;
  min-height: 90px;
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
  align-items: center;
  justify-content: space-between;
`;
//--------------------------------
