import styled, { css } from 'styled-components';
import * as colors from '../../config/colors';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const heading = css`
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const ProductContainer = styled.div`
  margin-top: 20px;
`;

export const SectionTop = styled.div`
  background-color: ${colors.lightPrimaryColor};
  padding: 15px 35px;
  ${flexCenter};
`;

export const SectionTopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 576px;
`;

export const TitleSection = styled.div`
  ${flexCenter};
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${colors.secondaryColor};
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
`;

export const IconsSection = styled.h1`
  ${flexCenter};
  gap: 12px;
`;

export const StockBadge = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
  width: max-content;
  padding: 7px 12px;
  border-radius: 15px;
  background-color: ${({ InStock }) =>
    InStock ? colors.primaryColor : colors.secondaryColor};
`;

export const ProductFigure = styled.div`
  height: 215px;
  background-color: #bebebe;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

export const Details = styled.div`
  padding: 25px 35px;
`;

export const Price = styled.p`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: 1px;
  color: ${colors.secondaryColor};
`;

export const PriceText = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 25px;
  letter-spacing: 1px;
  color: ${colors.textCardColor};
`;

export const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DescriptionTitle = styled.p`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${colors.secondaryColor};
`;

export const Divider = styled.hr`
  width: 100%;
  height: 2px;
  background-color: ${colors.secondaryColor};
`;

export const DescriptionText = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  line-height: 0.95;
  letter-spacing: 1px;
  margin-bottom: 30px;
  color: ${colors.textCardColor};
`;

export const ActionButton = styled.button`
  background-color: transparent;
  height: 65px;
`;
