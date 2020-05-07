import { addDecorator, configure } from '@storybook/react';

import StylesDecorator from './styles-decorator';
import { ThemeContext } from 'styled-components';

addDecorator(StylesDecorator);

configure(require.context('../src/stories', true, /\.stories\.js$/), module);