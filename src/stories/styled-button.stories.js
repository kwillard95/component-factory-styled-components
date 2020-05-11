import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button/Button';
import { MyNewThemedButton } from '../App';

export default {
  title: 'Styled Button',
};

export const Default = () => {
  return (
    <Button variant="text" styleType="secondary">Button</Button>
  )
}

export const Contained = () => {
  return (
    <Button variant="contained" styleType="primary">Button</Button>
  )
}

export const CustomTheme = () => {
  return (
    <MyNewThemedButton styleType="primary" onClick={action('Styled button clicked')}>Styled Button</MyNewThemedButton>
  )
}