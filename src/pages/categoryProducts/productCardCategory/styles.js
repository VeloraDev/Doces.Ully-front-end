import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const ProductFlavor = styled.div`
  font-size: 30px;
  color: ${colors.secondaryColor};
  font-weight: 700;
`;

export const Price = styled.div`
  font-size: 26px;
  color: ${colors.lightSecondaryColor2};
  font-weight: 600;
`;

export const SeeMore = styled.button`
  font-family: 'Dongle', sans-serif;
  background-color: transparent;
  font-size: 30px;
  font-weight: 700;
  color: ${colors.secondaryColor};
  text-transform: uppercase;
`;
