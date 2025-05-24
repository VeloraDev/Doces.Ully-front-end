import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const ProductCategory = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.secondaryColor};
`;

export const ProductFlavor = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: ${colors.lightSecondaryColor2};
`;

export const PriceContainer = styled.div``;

export const QuantContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProductPrice = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${colors.secondaryColor};
  margin-top: 10px;
`;
