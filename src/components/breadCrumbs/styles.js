import styled from 'styled-components';
import * as colors from '../../config/colors';
import { Link } from 'react-router-dom';

export const CrumbContainer = styled.div`
  background-color: rgba(254, 233, 227, 0.3);
  position: relative;
  margin-top: 30px;

  hr {
    position: absolute;
    bottom: 0;
  }
`;

export const CrumbList = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: ${({ $size }) =>
    $size === 'big' ? 'flex-start' : 'space-around'};
  gap: ${({ $size }) => ($size === 'big' ? '20px' : '10px')};
`;

export const CrumbItem = styled.div`
  display: flex;
  align-items: center;

  & + &::before {
  }
`;

export const CrumbLink = styled(Link)`
  font-family: 'Marmelad';
  color: ${colors.lightSecondaryColor2};
  font-size: ${({ $size }) => ($size === 'big' ? '18px' : '16px')};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.5px;
`;
