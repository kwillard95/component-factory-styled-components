import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button/Button';
import { MyNewThemedButton } from '../App';

export default {
  title: 'Styled Button',
};

export const Default = () => {
  return (
  <div>
    <Button variant="secondary">Button</Button>
  </div>
  )
}

export const CustomTheme = () => {
  return (
    <MyNewThemedButton variant="primary" onClick={action('Styled button clicked')}>Styled Button</MyNewThemedButton>
  )
}