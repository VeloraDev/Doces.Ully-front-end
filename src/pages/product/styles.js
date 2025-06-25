import styled, { css } from 'styled-components';
import * as colors from '../../config/colors';

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SectionTop = styled.div`
  background-color: ${colors.lightPrimaryColor};
  padding: 12px 35px;
  ${flexCenter};
`;

export const SectionTopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 500px;
`;

export const TitleSection = styled.div`
  ${flexCenter};
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${colors.secondaryColor};
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  width: 35px;
  height: 35px;
`;

export const IconsSection = styled.h1`
  ${flexCenter};
  gap: 12px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 225px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background-color: #bebebe;
`;

export const ProductFigure = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  padding: 25px 35px;
  flex: 1;
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

export const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ActionButton = styled.button`
  background-color: transparent;

  &:nth-of-type(1) {
    border: 4px solid ${colors.primaryColor};
    border-radius: 50px;
    padding: 4px 15px;
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    color: ${colors.primaryColor};
    line-height: 100%;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
