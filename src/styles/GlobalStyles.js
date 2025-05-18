import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import * as colors from '../config/colors';
import '@fontsource/dongle';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      height: 100%;
      font-family: 'Dongle', sans-serif;
      background-color: ${colors.background};
      line-height: 100%;
    }

    button {
      border: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    hr {
      border: none;
      background-color: ${colors.primaryColor};
    }

    h1 {
      font-family: 'Crushed', sans-serif;
      line-height: 100%;
    }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 28px;
  padding: ${props =>
    props.$isHome ? '40px 16px 35px 16px' : '30px 16px 15px 16px'};
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

export const Line = styled.hr`
  width: 100%;
  height: 2px;
`;
