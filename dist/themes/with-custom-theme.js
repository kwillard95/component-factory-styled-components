import React from "react";

export const withCustomTheme = (Theme, Component, theme) => props => (
  <Theme theme={theme}>
    <Component {...props} />
  </Theme>
);
