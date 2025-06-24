import styled, { css, keyframes } from 'styled-components';
import * as colors from '../../config/colors';
import { motion } from 'framer-motion';

export const baseButton = css`
  font-family: 'Dongle';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    scale: 0.98;
  }
  to {
    opacity: 1;
    scale: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    scale: 1;
  }
  to {
    opacity: 0;
    scale: 0.98;
  }
`;

export const ConfirmContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ConfirmSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: max-content;
  max-width: 80%;
  background-color: #fff;
  padding: 20px 15px 10px 15px;
  border-radius: 12px;
  text-align: center;
`;

export const ConfirmText = styled.div`
  color: ${colors.secondaryColor};
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const ActionGroup = styled.div`
  text-align: center;
`;

export const CancelButton = styled.button`
  background-color: ${colors.primaryColor};
  border-radius: 100px;
  padding: 5px 20px;

  color: #fff;
  ${baseButton};
`;

export const ConfirmButton = styled.button`
  background-color: transparent;
  padding: 0 10px;
  margin-left: 20px;

  color: ${colors.secondaryColor};
  ${baseButton};
`;
