import React from 'react';
import { Button } from './components/styled-button';
import { withCustomTheme} from './with-custom-theme';
// import { Default } from './stories/styled-button.stories'

const myCustomTheme = {
  colors: {
    lightest: "hotpink",
    secondary: "cyan",
    primary: "yellow"
  }
};

const MyNewThemedButton = withCustomTheme(Button, myCustomTheme)

const onClick = () => alert("clicky!!");

const App = () => (
  <div>
    <Button onClick={onClick}>Button</Button>
    <MyNewThemedButton onClick={onClick}>New Theme Button</MyNewThemedButton>
  </div>
);

export default App;
