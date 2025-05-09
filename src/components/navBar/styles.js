import styled, { keyframes } from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MenuOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const OverlayContainer = styled.div`
  background-color: ${colors.background};
  width: 80%;
  height: auto;
  padding: 25px 25px 35px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  border-radius: 0 0 20px 0;
  animation: ${({ animation }) => (animation === 'in' ? entrar : sair)} 0.3s
    ease-in-out;

  button {
    background-color: transparent;
    width: min-content;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const entrar = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const sair = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px 0 20px;

  button {
    background-color: transparent;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  a {
    font-size: 40px;
    font-weight: 400;
    color: ${colors.secondaryColor};
    margin-left: 10px;
  }

  hr {
    height: 1px;
  }
`;

export const ContainerLine = styled.div`
  display: flex;
  justify-content: space-between;

  hr {
    height: 2px;
    width: 30%;
  }
`;
