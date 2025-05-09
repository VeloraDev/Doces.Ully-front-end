import styled, { keyframes, css } from 'styled-components';
import '@fontsource/crushed';
import * as colors from '../../config/colors';

export const Container = styled.div`
  margin-top: 28px;
`;

export const TitleContainer = styled.div`
  background-color: ${colors.primaryColor};
  padding: 5px 0;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 400;
    color: #fff;
  }
`;

export const SliderContainer = styled.div`
  background-color: ${colors.lightPrimaryColor};
  height: 220px;
  position: relative;
  overflow: hidden;
`;

export const BtnContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  z-index: 1;

  button {
    background-color: transparent;
  }
`;

export const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${props => (props.$active ? 1 : 0)};
  animation: ${props => {
    if (props.$direction === 'next') {
      if (props.$animation === 'in')
        return css`
          ${entrarNext} 1s ease-in-out
        `;
      if (props.$animation === 'out')
        return css`
          ${sairNext} 1s ease-in-out
        `;
    } else {
      if (props.$animation === 'in')
        return css`
          ${entrarPrev} 1s ease-in-out
        `;
      if (props.$animation === 'out')
        return css`
          ${sairPrev} 1s ease-in-out
        `;
    }
    return 'none';
  }};
`;

const entrarNext = keyframes`
  from {
      transform: translateX(100%);
      opacity: 1;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;

const sairNext = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 1;
  }
`;

const entrarPrev = keyframes`
  from {
      transform: translateX(-100%);
      opacity: 1;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
`;

const sairPrev = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 1;
  }
`;

export const Line = styled.hr`
  width: 100%;
  height: 2px;
`;
