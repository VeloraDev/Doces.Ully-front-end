import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const ProductFlavor = styled.div`
  font-size: 30px;
  color: ${colors.secondaryColor};
  font-weight: 700;
`;

export const Price = styled.div`
  font-size: 30px;
  color: ${colors.lightSecondaryColor2};
  font-weight: 600;
`;

export const InStock = styled.div`
  background-color: ${props =>
    props.inStock ? colors.primaryColor : colors.secondaryColor};
  border-radius: 30px;
  padding: 8px 12px;

  font-size: 24px;
  font-weight: 500;
  color: #fff;
`;

export const SeeMore = styled.button`
  font-family: 'Dongle', sans-serif;
  background-color: transparent;
  font-size: 30px;
  font-weight: 700;
  color: ${colors.secondaryColor};
  text-transform: uppercase;
`;
