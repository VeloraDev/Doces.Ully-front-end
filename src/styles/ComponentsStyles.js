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
  z-index: ${({ $onSelect }) => {
    return $onSelect ? '1' : '0';
  }};
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
  background-color: ${({ $InStock }) =>
    $InStock ? colors.primaryColor : colors.secondaryColor};
`;
//------------------------------------------------------
