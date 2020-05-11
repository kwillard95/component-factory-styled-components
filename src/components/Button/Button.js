import React from 'react';
import styled from'styled-components';

import style from './Button-style';

export const Button = ({ onClick, variant, children }) => {
  const ButtonBase = styled.button([style]);
  
  return <ButtonBase onClick={onClick} variant={variant}>{children}</ButtonBase>

}

