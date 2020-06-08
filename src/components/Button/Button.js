import React from "react";
import styled from "styled-components";

import Theme from '../Theme/Theme'
import { textStyle, containedStyle } from "./Button-style";

const TextButton = styled.a([textStyle]);
const ContainedButton = styled.button([containedStyle]);

const Button = ({
  onClick,
  variant = "text",
  primary,
  children,
}) => {
  if (variant === "text") {
    return (
      <Theme>
      <TextButton onClick={onClick} primary={primary} variant={variant}>
        {children}
      </TextButton>
      </Theme>
    );
  }
  if (variant === "contained") {
    return (
      <Theme>
      <ContainedButton
        onClick={onClick}
        primary={primary}
        variant={variant}
      >
        {children}
      </ContainedButton>
      </Theme>
    );
  }
};

export default Button;
