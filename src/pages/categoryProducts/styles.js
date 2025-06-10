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
  background-color: ${colors.lightPrimaryColor};
  margin-top: 20px;
  padding: 14px 10px 25px 10px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: ${colors.secondaryColor};
  text-transform: uppercase;
`;
