import React, { act, useState } from 'react';
import {
  Container,
  ContainerLine,
  ContainerNavBar,
  MenuOverlay,
  OverlayContainer,
  LogoContainer,
  LinksContainer,
} from './styles';
import CartIcon from '../../assets/icons/cart-icon.svg';
import HamburguerBtn from '../../assets/icons/hamburguer-btn.svg';
import Logo from '../../assets/icons/logos/logo-navbar.svg';
import LogoHamb from '../../assets/icons/logos/logo-btn-hamb.svg';
import EscIcon from '../../assets/icons/esc-icon.svg';
import { useNavigate } from 'react-router-dom';

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
    <Container>
      <MenuOverlay isVisible={isVisible} onClick={handleCloseMenu}>
        <OverlayContainer
          onClick={stopPropagation}
          animation={active ? 'in' : 'out'}>
          <button onClick={() => handleCloseMenu()}>
            <img src={EscIcon} />
          </button>
          <LinksContainer>
            <a
              onClick={() => {
                navigate('/login');
                handleCloseMenu();
              }}>
              Login
            </a>
            <hr />
            <a
              onClick={() => {
                navigate('/cadastro');
                handleCloseMenu();
              }}>
              Registro
            </a>
            <hr />
            <a onClick={handleCloseMenu}>Quem somos</a>
            <hr />
            <a onClick={handleCloseMenu}>Sair</a>
          </LinksContainer>
          <LogoContainer>
            <img src={LogoHamb} />
          </LogoContainer>
        </OverlayContainer>
      </MenuOverlay>

      <ContainerNavBar>
        <button onClick={handleOpenMenu}>
          <img src={HamburguerBtn} />
        </button>
        <button onClick={() => navigate('/')}>
          <img src={Logo} />
        </button>
        <button onClick={() => navigate('/carrinho')}>
          <img src={CartIcon} />
        </button>
      </ContainerNavBar>
      <ContainerLine>
        <hr />
        <hr />
      </ContainerLine>
    </Container>
  );
}

export default Navbar;
