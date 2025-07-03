import styled, { css } from 'styled-components';
import * as colors from '../../config/colors';

const fullFlexColumn = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CategoryProductsContainer = styled.div`
  ${fullFlexColumn};
`;

export const ContentContainer = styled.div`
  ${fullFlexColumn};
  justify-content: space-between;
  background-color: ${colors.lightPrimaryColor};
  padding: 14px 10px 25px 10px;
`;

export const ProductContainer = styled.div`
  ${fullFlexColumn}
  gap: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
  color: ${colors.secondaryColor};
`;
