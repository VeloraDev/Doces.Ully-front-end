import React, { useState } from 'react';
import {
  Container,
  Button,
  ContainerLine,
  Line,
  ContainerNavBar,
  MenuOverlay,
  OverlayContainer,
  LinksContainer,
} from './styles';
import CartIcon from '../../assets/icons/cart-icon.svg';
import HamburguerBtn from '../../assets/icons/hamburguer-btn.svg';
import Logo from '../../assets/icons/logo-navbar.svg';
import EscIcon from '../../assets/icons/esc-icon.svg';

import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  function handleOverlayClick() {
    setActive(false);
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  return (
    <Container>
      {active && (
        <MenuOverlay onClick={handleOverlayClick}>
          <OverlayContainer onClick={stopPropagation}>
            <button onClick={() => setActive(false)}>
              <img src={EscIcon} />
            </button>
            <LinksContainer>
              <a onClick={() => navigate('/login')}>Login</a>
              <hr />
              <a href="#">Logout</a>
              <hr />
              <a href="#">Contate-nos</a>
            </LinksContainer>
          </OverlayContainer>
        </MenuOverlay>
      )}

      <ContainerNavBar>
        <Button onClick={() => setActive(true)}>
          <img src={HamburguerBtn} />
        </Button>
        <img src={Logo} />
        <Button onClick={() => navigate('/carrinho')}>
          <img src={CartIcon} />
        </Button>
      </ContainerNavBar>
      <ContainerLine>
        <Line />
        <Line />
      </ContainerLine>
    </Container>
  );
}

export default Navbar;
