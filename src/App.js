import React from 'react';
import { Button } from './components/Button/Button';
import { withCustomTheme} from './with-custom-theme';
// import { Default } from './stories/styled-button.stories'

const myCustomTheme = {
  palette: {
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
  }
};

export const MyNewThemedButton = withCustomTheme(Button, myCustomTheme)

const onClick = () => console.log('Button Clicked!');

export const App = () => (
  <div>
    <Button onClick={onClick} variant="secondary">Button</Button>
    <MyNewThemedButton onClick={onClick} variant="primary">New Theme Button</MyNewThemedButton>
  </div>
);

export default App;
