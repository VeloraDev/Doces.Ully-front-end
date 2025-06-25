import styled, { keyframes, css } from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  margin-top: 28px;
  max-width: 576px;
  width: 100%;
`;

export const TitleSection = styled.div`
  background-color: ${colors.primaryColor};
  padding: 5px 0;
  text-align: center;

  @media (min-width: 576px) {
    border-radius: 10px 10px 0 0;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const SliderContainer = styled.div`
  background-color: ${colors.lightPrimaryColor};
  height: 220px;
  position: relative;
  overflow: hidden;

  @media (min-width: 576px) {
    border-radius: 0 0 10px 10px;
  }
`;

export const ActionGroup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  z-index: 1;
`;

export const ActionButton = styled.button`
  background-color: transparent;
`;

export const ImageSlider = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
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
