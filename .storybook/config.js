import { addDecorator, configure } from '@storybook/react';

import StylesDecorator from './styles-decorator';

const req = require.context('../src', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(StylesDecorator);

// configure(require.context('../src/stories', true, /\.stories\.js$/), module);
configure(loadStories, module);