import styled, { css } from 'styled-components';
import * as colors from '../../config/colors';

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductsContainer = styled.div`
  ${flexColumn};
`;

export const SectionTop = styled.div`
  ${flexCenter};
  justify-content: space-between;
  margin: 14px 12px 0;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  color: ${colors.secondaryColor};
`;

export const SectionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const SectionCategory = styled.div`
  ${flexColumn};
  gap: 28px;
`;

export const SectionProducts = styled.div`
  ${flexColumn};
  background-color: ${colors.lightPrimaryColor};
`;

export const AddProductIcon = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 34px 18px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;
