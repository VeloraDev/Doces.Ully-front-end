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
  gap: 10px;
  background-color: #fff;
  border-radius: 12px;
  min-height: 95px;
  max-width: 576px;
  position: relative;
  padding: 0 5px;
`;

export const ProductImage = styled.img`
  width: 105px;
  height: 95px;
  background-color: #d9d9d9;
  border-radius: 16px;
  flex-shrink: 0;
  position: relative;
  top: -8px;
  object-fit: cover;
  filter: ${({ $gray }) => ($gray ? 'grayscale(100%)' : 'grayscale(0%)')};
`;

export const ProductContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
//ADD PRODUCT CONTAINER
export const AddProductSection = styled.div`
  width: 100%;
  max-width: 576px;
  background-color: #fff;
  border-radius: 10px;
  padding: 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  p {
    font-size: 30px;
    color: ${colors.secondaryColor};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;
//------------------------------------------------------

//------------------------------------------------------
//FORM ORDER
export const InputSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
//------------------------------------------------------

//------------------------------------------------------
//BUTTON
export const ActionButton = styled.button`
  margin-top: 32px;
  background-color: ${colors.secondaryColor};
  padding: 10px 0;
  border-radius: 100px;
  min-width: 200px;

  p {
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;
//------------------------------------------------------

//------------------------------------------------------
export const StockBadge = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #fff;
  width: max-content;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({ $inStock }) => {
    return $inStock ? colors.primaryColor : colors.secondaryColor;
  }};
`;
//------------------------------------------------------
