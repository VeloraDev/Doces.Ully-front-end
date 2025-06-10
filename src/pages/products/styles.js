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

export const PathSection = styled.div`
  ${flexCenter};
  padding: 8px;
  gap: 5px;
`;

export const SectionTop = styled.div`
  ${flexCenter};
  justify-content: space-between;
  margin: 14px 12px 0;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${colors.secondaryColor};
  text-transform: uppercase;
`;

export const SectionCategory = styled.div`
  ${flexColumn};
  gap: 28px;
`;

export const SectionProducts = styled.div`
  ${flexColumn};
  background-color: ${colors.lightPrimaryColor};
`;
