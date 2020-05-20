import React from "react";
import styled from "styled-components";

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
      <TextButton onClick={onClick} primary={primary} variant={variant}>
        {children}
      </TextButton>
    );
  }
  if (variant === "contained") {
    return (
      <ContainedButton
        onClick={onClick}
        primary={primary}
        variant={variant}
      >
        {children}
      </ContainedButton>
    );
  }
};

export default Button;
