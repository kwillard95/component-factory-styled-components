import React from 'react';
import { Button } from './components/Button/Button';
import { withCustomTheme } from './with-custom-theme';


const myCustomTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      light: 'pink',
      main: 'blue',
      dark: 'black',
      contrastText: 'purple'
    },
    secondary: {
      light: '#a2b9bc',
      main: '#b2ad7f',
      dark: '#878f99',
      contrastText: '#6b5b95'
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em"
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem", 
      lineHeight: 1.75,
      letterSpacing: "0.00938em"
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
      letterSpacing: "0.02857em"
    }
  },
  shape: {
    borderRadius: '4px'
  }
};

export const MyNewThemedButton = withCustomTheme(Button, myCustomTheme);

const onClick = () => console.log('Button Clicked!');

export const App = () => (
  <div>
    <Button onClick={onClick} variant="text" styleType="primary">Button</Button>
    <Button onClick={onClick} variant="contained" styleType="secondary">Button</Button>
    <MyNewThemedButton onClick={onClick} variant="contained" styleType="primary">New Theme Button</MyNewThemedButton>
    <MyNewThemedButton onClick={onClick} variant="text" styleType="primary">New Theme Button</MyNewThemedButton>
  </div>
);

export default App;
