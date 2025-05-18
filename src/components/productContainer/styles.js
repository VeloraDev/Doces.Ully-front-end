import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  margin-top: 30px;
  position: relative;
`;

export const SectionTop = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryColor};
  padding: 5px 0;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #fff;
  text-transform: uppercase;
`;

export const ActionButton = styled.button`
  position: absolute;
  right: 12px;
  background-color: transparent;
  height: 21px;
`;
