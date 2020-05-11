import React from 'react';
import styled from'styled-components';

import { textStyle, containedStyle } from './Button-style';

export const Button = ({ onClick, variant = "text", styleType = "primary", children }) => {
  let ButtonBase;
  if (variant === "text") {
    ButtonBase = styled.a([textStyle]);
  } else if (variant === "contained") {
    ButtonBase = styled.button([containedStyle]);
  }
  
  return <ButtonBase onClick={onClick} styleType={styleType} variant={variant}>{children}</ButtonBase>

}

