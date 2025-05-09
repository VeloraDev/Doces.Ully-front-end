import styled from 'styled-components';
import * as colors from '../../config/colors';

export const ProductContainer = styled.div`
  margin-top: 20px;
`;

export const ContainerTop = styled.div`
  background-color: ${colors.lightPrimaryColor};
  padding: 15px;
`;

export const ContentTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 12px;
  }

  h1 {
    font-size: 30px;
    font-weight: 400;
    color: ${colors.secondaryColor};
  }

  button {
    background-color: transparent;

    img {
      width: 35px;
      height: 35px;
    }
  }
`;
