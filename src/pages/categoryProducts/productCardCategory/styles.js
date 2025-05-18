import styled from 'styled-components';
import * as colors from '../../../config/colors';

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
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const FavButton = styled.button`
  background-color: transparent;
  border-radius: 100%;
  height: 35px;
`;

export const ProductFlavor = styled.div`
  margin-bottom: 12px;
  font-size: 30px;
  color: ${colors.secondaryColor};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Price = styled.div`
  font-size: 26px;
  color: ${colors.lightSecondaryColor2};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ContentDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InStock = styled.div`
  background-color: ${props =>
    props.inStock ? colors.primaryColor : colors.secondaryColor};
  border-radius: 30px;
  padding: 8px 12px;

  font-size: 24px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const SeeMore = styled.button`
  font-family: 'Dongle', sans-serif;
  background-color: transparent;
  font-size: 30px;
  color: ${colors.secondaryColor};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
