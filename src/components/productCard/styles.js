import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  min-width: max-content;
  padding: 5px;
  scroll-snap-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
  display: block;
  margin: 0 auto;
  position: relative;
  top: -11px;
  width: 95px;
  height: 95px;
  object-fit: cover;
  border-radius: 15px;
  background-color: #e0e0e0;
  filter: ${({ $gray }) => ($gray ? 'grayscale(100%)' : 'grayscale(0%)')};
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
  padding: 8px 0;
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
  background-color: #fff;
  border-radius: 100%;
  width: 35px;
  height: 35px;
`;
