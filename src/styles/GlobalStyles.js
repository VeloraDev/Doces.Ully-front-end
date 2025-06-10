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
      font-family: 'Dongle', sans-serif;
      line-height: 1;
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

    p {
      font-family: 'Dongle';
    }

    input {
      font-family: 'Dongle';
      outline: none;
      background-color: transparent;
      width: 100%;
      color: ${colors.lightSecondaryColor2};
      border: none;
    }
`;
