import { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import '@fontsource/dongle';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
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
`;
