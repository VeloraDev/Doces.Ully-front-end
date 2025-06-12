import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ContainerNavBar,
  Overlay,
  Sidebar,
  ExitButton,
  NavList,
  NavLink,
  NavLine,
  SidebarLogo,
  NavbarSection,
  NavButton,
  LineSection,
  Line,
} from './styles';

import {
  CartIcon,
  HambIcon,
  EscIcon,
  LogoNavBarIcon,
  LogoHambIcon,
} from '../../assets/index';

function Navbar() {
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function handleCloseMenu() {
    setActive(false);

    setTimeout(() => {
      setIsVisible(false);
    }, 250);
  }

  function handleOpenMenu() {
    setIsVisible(true);

    setActive(true);
  }

  return (
    <ContainerNavBar>
      <Overlay $isVisible={isVisible} onClick={handleCloseMenu}>
        <Sidebar onClick={stopPropagation} $animation={active ? 'in' : 'out'}>
          <ExitButton onClick={() => handleCloseMenu()}>
            <EscIcon />
          </ExitButton>

          <NavList>
            <NavLink
              onClick={() => {
                navigate('/login');
                handleCloseMenu();
              }}>
              Login
            </NavLink>
            <NavLine />
            <NavLink
              onClick={() => {
                navigate('/cadastro');
                handleCloseMenu();
              }}>
              Cadastro
            </NavLink>
            <NavLine />
            <NavLink onClick={handleCloseMenu}>Quem somos</NavLink>
            <NavLine />
            <NavLink onClick={handleCloseMenu}>Sair</NavLink>
          </NavList>

          <SidebarLogo>
            <LogoHambIcon />
          </SidebarLogo>
        </Sidebar>
      </Overlay>

      <NavbarSection>
        <NavButton onClick={handleOpenMenu}>
          <HambIcon />
        </NavButton>
        <NavButton onClick={() => navigate('/')}>
          <LogoNavBarIcon />
        </NavButton>
        <NavButton onClick={() => navigate('/carrinho')}>
          <CartIcon />
        </NavButton>
      </NavbarSection>

      <LineSection>
        <Line />
        <Line />
      </LineSection>
    </ContainerNavBar>
  );
}

export default Navbar;
