import { css } from 'styled-components'; 
import { Fill } from './RadioButton';

export const RootStyle = ({ theme, ...rest}) => `
  margin: 5px;
  cursor: pointer;
  width: ${theme.typography.radio.size};
  height: ${theme.typography.radio.size};
  position: relative;
  label {
    margin-left: 25px;
    font-family: ${theme.typography.button.fontFamily};
  }
  &::before {
    content: "";
    border-radius: 100%;
    border: 1px solid 
    ${theme.typography.radio.size};
    background: ${theme.typography.radio.background};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
  }
`;

export const FillStyle = ({ theme, ...rest}) => `
  background: ${theme.typography.radio.fillColor};
  width: 0;
  height: 0;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-in, height 0.2s ease-in;
  pointer-events: none;
  z-index: 1;
  &::before {
    content: "";
    opacity: 0;
    width: calc(20px - 4px);
    position: absolute;
    height: calc(20px - 4px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid
    ${theme.typography.radio.borderActive};
    border-radius: 100%;
  }
`;

export const InputStyle = ({ theme, ...rest }) => `
opacity: 0;
z-index: 2;
position: absolute;
top: 0;
width: 100%;
height: 100%;
margin: 0;
cursor: pointer;

&:focus {
  outline: none;
}
&:checked {
  & ~ ${Fill} {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    transition: width 0.2s ease-out, height 0.2s ease-out;

    &::before {
      opacity: 1;
      transition: opacity 1s ease;
    }
  }
}
`;

