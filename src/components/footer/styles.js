import styled from 'styled-components';
import * as colors from '../../config/colors';

export const FooterContainer = styled.div`
  text-align: center;
  padding: 18px 0;

  h1 {
    font-size: 20px;
    font-weight: 400;
    color: ${colors.secondaryColor};
    text-transform: uppercase;
  }
`;
