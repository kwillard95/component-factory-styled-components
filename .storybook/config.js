import { addDecorator, configure } from '@storybook/react';
import requireContext from 'require-context.macro';

import StylesDecorator from './styles-decorator';

const req = requireContext('../src/components', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(StylesDecorator);
configure(loadStories, module);