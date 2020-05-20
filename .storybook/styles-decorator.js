import React from 'react';
import { ThemeProvider } from "styled-components";
import designTokens from "../src/themes/designTokens";

const StylesDecorator = storyFn => (
   <ThemeProvider theme={designTokens}>
      {storyFn()}
    </ThemeProvider>);

export default StylesDecorator;



