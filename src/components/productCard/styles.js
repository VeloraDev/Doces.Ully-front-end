import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: #fff;
  min-width: max-content;
  padding: 4px;
  scroll-snap-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  top: -11px;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background-color: ${colors.primaryColor};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContentDown = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Title = styled.p`
  font-size: 20px;
  color: ${colors.secondaryColor};
`;

export const Price = styled.p`
  font-size: 24px;
  color: ${colors.secondaryColor};
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 100%;
  height: min-content;
  width: auto;
`;

export const FavIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
`;
