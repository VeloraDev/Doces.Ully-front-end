import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  min-width: max-content;
  padding: 5px;
  scroll-snap-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.div`
  position: relative;
  top: -11px;
  width: 100%;
  height: 85px;
  border-radius: 15px;
  background-color: #e0e0e0;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
`;

export const TitleCategory = styled.p`
  font-size: 22px;
  color: ${colors.secondaryColor};
`;

export const TitleFlavor = styled.p`
  font-size: 22px;
  color: ${colors.textCardColor};
  text-transform: uppercase;
`;

export const Price = styled.div`
  background-color: ${colors.primaryColor};
  padding: 8px 10px;
  border-radius: 15px;

  color: #fff;
  font-weight: 500;
  font-size: 30px;
`;

export const FavButton = styled.button`
  position: absolute;
  right: -17px;
  top: -18px;
  z-index: 1;
  background-color: transparent;
  border-radius: 100%;
`;
