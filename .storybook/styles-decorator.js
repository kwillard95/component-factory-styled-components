import React from 'react';

// import CssBaseline from "@material-ui/core/CssBaseline";
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import { StylesProvider } from '@material-ui/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

// import { ThemeProvider as StyledThemeProvider } from "styled-components";

// import LightTheme from '../src/themes/light-theme';

// const StylesDecorator = storyFn => (
//   <StylesProvider injectFirst>
//     <CssBaseline />
//     <StyledThemeProvider theme={LightTheme}></StyledThemeProvider>
//     {storyFn()}
//   </StylesProvider>
// );

// export default StylesDecorator;



import { ThemeProvider } from "styled-components";
import designTokens from "../src/themes/design-tokens";

const StylesDecorator = storyFn => (
   <ThemeProvider theme={designTokens}>
      {storyFn()}
    </ThemeProvider>);

export default StylesDecorator;



