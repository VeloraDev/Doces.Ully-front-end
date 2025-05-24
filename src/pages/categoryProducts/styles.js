import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CategoryProductsContainer = styled.div``;

export const ContentContainer = styled.div`
  background-color: ${colors.lightPrimaryColor};
  margin-top: 20px;
  padding: 14px 10px 25px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 400;
  color: ${colors.secondaryColor};
  text-transform: uppercase;
`;
