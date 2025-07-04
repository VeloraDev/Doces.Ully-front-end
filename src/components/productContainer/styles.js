import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  margin-top: 30px;
  position: relative;
  width: 100%;
  flex: 1;
`;

export const SectionTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryColor};
  padding: 5px 0;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  text-transform: uppercase;
`;

export const ActionButton = styled.button`
  position: absolute;
  right: 12px;
  background-color: transparent;
  height: 21px;
`;
