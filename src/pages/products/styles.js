import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PathSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 5px;
`;

export const SectionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const SectionProducts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightPrimaryColor};
`;
