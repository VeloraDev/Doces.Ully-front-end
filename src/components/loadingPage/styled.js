import styled, { keyframes, css } from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const spin = keyframes`
    to {
        transform: rotate(360deg);
    } 
`;

export const Loading = styled.div`
  width: 70px;
  height: 70px;
  border: 8px solid transparent;
  border-left-color: #fff;
  border-radius: 50%;
  animation: ${spin} 1.2s linear infinite;
`;
