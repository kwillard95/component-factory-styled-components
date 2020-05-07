import React from 'react';
import styled, { css } from 'styled-components';

const style = ({ theme, ...rest }) => css`
  border-color: ${theme.palette.primary.dark};
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.primary.contrastText};
  border-radius: ${theme.shape.borderRadius};
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  font-size: 24px;
  :hover {
    color: ${theme.palette.primary.dark};
    background-color: ${theme.palette.primary.main};
  } 
`;

const ButtonBase = styled.button([style]);

export const Button = ({ onClick, children }) => (
  <ButtonBase onClick={onClick}>{children}</ButtonBase>
)
