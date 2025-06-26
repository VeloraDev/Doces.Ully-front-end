import styled, { keyframes } from 'styled-components';
import * as colors from '../../config/colors';

export const ContainerNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
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

export const Sidebar = styled.div`
  background-color: ${colors.background};
  width: 80%;
  height: auto;
  padding: 25px 25px 35px 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  border-radius: 0 0 20px 0;
  animation: ${({ $animation }) => ($animation === 'in' ? entrar : sair)} 0.3s
    ease-in-out;
`;

export const ExitButton = styled.button`
  background-color: transparent;
  width: min-content;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const SidebarLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const NavbarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px 0 20px;
`;

export const NavButton = styled.button`
  background-color: transparent;
  position: relative;
`;

export const NavList = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
`;

export const NavLink = styled.a`
  font-family: 'Dongle';
  background-color: transparent;
  font-size: 40px;
  font-weight: 400;
  color: ${colors.secondaryColor};
  margin-left: 10px;
  cursor: pointer;
`;

export const NavLine = styled.hr`
  width: 100%;
  height: 1px;
`;

export const LineSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Line = styled.hr`
  width: 30%;
  height: 2px;
`;

export const Quant = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 100%;

  color: #fff;
  font-size: 24px;
`;
