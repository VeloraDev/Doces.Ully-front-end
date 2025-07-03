import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CrudContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  padding: 30px;
  flex: 1;
  background-color: ${colors.lightPrimaryColor};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${colors.secondaryColor};
  font-size: 25px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button {
    max-width: 60%;
    text-align: center;
    margin-top: 0;
    p {
      font-size: 30px;
      text-transform: uppercase;
    }
  }
`;

export const ImageContainer = styled.div`
  label {
    width: 250px;
    height: 160px;
    border-radius: 20px;
    border: 2px solid ${colors.lightSecondaryColor2};
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: ${colors.secondaryColor};
    font-size: 24px;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  input {
    display: none;
  }
`;
