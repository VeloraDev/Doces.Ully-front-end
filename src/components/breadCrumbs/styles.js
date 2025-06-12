import styled from 'styled-components';
import * as colors from '../../config/colors';
import { Link } from 'react-router-dom';

export const CrumbContainer = styled.div`
  background-color: rgba(254, 233, 227, 0.3);
  position: relative;

  hr {
    position: absolute;
    bottom: 0;
  }
`;

export const CrumbList = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
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
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
`;
