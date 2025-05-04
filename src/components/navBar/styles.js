import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.button`
  background-color: transparent;
`;

export const MenuOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const OverlayContainer = styled.div`
  background-color: ${colors.background};
  width: 60%;
  height: 50vh;
  padding: 18px 14px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 0 0 20px 0;
  animation: entrar 200ms ease-in;

  button {
    background-color: transparent;
    width: min-content;

    img {
      width: 25px;
      height: 25px;
    }
  }

  @keyframes entrar {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const ContainerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    font-size: 35px;
    color: ${colors.secondaryColor};
  }

  hr {
    border: none;
    background-color: ${colors.primaryColor};
    height: 1.5px;
  }
`;

export const ContainerLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.hr`
  background-color: ${colors.primaryColor};
  border: none;
  height: 2px;
  width: 30%;
`;
