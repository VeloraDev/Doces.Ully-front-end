import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

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
  Quant,
} from './styles';

import {
  CartIcon,
  HambIcon,
  EscIcon,
  LogoNavBarIcon,
  LogoHambIcon,
} from '../../assets/index';

import fetchCart from '../../hooks/fetchCart';
import Loadingpage from '../loadingPage';

function Navbar() {
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);

  const { totalQuantity } = fetchCart();

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

  function logout() {
    dispatch(actions.logoutRequest({ navigate }));
  }

  return (
    <ContainerNavBar>
      {isLoading && <Loadingpage />}
      <Overlay $isVisible={isVisible} onClick={handleCloseMenu}>
        <Sidebar
          onClick={e => e.stopPropagation()}
          $animation={active ? 'in' : 'out'}>
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
            <NavLink>Quem somos</NavLink>
            <NavLine />
            <NavLink
              onClick={() => {
                handleCloseMenu();
                logout();
              }}>
              Sair
            </NavLink>
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
          {totalQuantity > 0 && <Quant>{totalQuantity}</Quant>}
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
