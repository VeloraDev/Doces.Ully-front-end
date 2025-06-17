import styled, { css } from 'styled-components';
import * as colors from '../../../config/colors';

export const baseButton = css`
  font-family: 'Dongle';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const ProductCategory = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.secondaryColor};
`;

export const PriceContainer = styled.div``;

export const Text = styled.div`
  color: ${colors.lightSecondaryColor2};
  font-size: 26px;
  font-weight: 700;
`;

export const QuantContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 24px;

  p {
    color: ${colors.lightSecondaryColor2};
    font-size: 30px;
    font-weight: 400;
  }
`;

export const ProductPrice = styled.div`
  color: ${colors.secondaryColor};
  font-size: 36px;
  font-weight: 700;
  margin-top: 10px;
`;
