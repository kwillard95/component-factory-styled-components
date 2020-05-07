import React from 'react';
import { Button } from './components/styled-button';
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
  }
};

const MyNewThemedButton = withCustomTheme(Button, myCustomTheme)

const onClick = () => console.log('Button Clicked!');

const App = () => (
  <div>
    <Button onClick={onClick}>Button</Button>
    <MyNewThemedButton onClick={onClick}>New Theme Button</MyNewThemedButton>
  </div>
);

export default App;
