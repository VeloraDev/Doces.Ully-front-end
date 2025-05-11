import styled from 'styled-components';
import * as colors from '../../config/colors';

export const FooterContainer = styled.div`
  text-align: center;
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
`;

export const Text = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${colors.secondaryColor};
  text-transform: uppercase;
  margin: 18px 0;
`;
