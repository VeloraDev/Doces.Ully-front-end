import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${colors.background};
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.secondaryColor};
  margin: 20px 0 0 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 14px;
  padding: 25px 20px 20px 20px;
  background-color: ${colors.lightPrimaryColor};
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
