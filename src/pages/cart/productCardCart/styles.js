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

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ConfirmSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: max-content;
  background-color: #fff;
  padding: 20px 15px 10px 15px;
  border-radius: 12px;
`;

export const ConfirmText = styled.div`
  color: ${colors.secondaryColor};
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const ActionGroup = styled.div`
  text-align: center;
`;

export const CancelButton = styled.button`
  background-color: ${colors.primaryColor};
  border-radius: 100px;
  padding: 5px 20px;

  color: #fff;
  ${baseButton};
`;

export const ConfirmButton = styled.button`
  background-color: transparent;
  padding: 0 10px;
  margin-left: 20px;

  color: ${colors.secondaryColor};
  ${baseButton};
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
