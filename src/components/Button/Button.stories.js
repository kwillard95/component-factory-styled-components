import React from 'react';

import { action } from '@storybook/addon-actions';

import Button from './Button';
// import { MyNewThemedButton } from '../App';

export default {
  title: 'Button',
};

export const Text = () => {
  return (
    <div>
      <Button onClick={action('Styled button clicked')} variant="text" primary>Default</Button>
      <br />
      <br />
      <Button onClick={action('Styled button clicked')} variant="text">Secondary</Button>
    </div>
  )
}


export const Contained = () => {
  return (
    <div>
      <Button onClick={action('Styled button clicked')} variant="contained" primary>Default</Button>
      <br />
      <br />
      <Button onClick={action('Styled button clicked')} variant="contained">Secondary</Button>
    </div>
  )
}
