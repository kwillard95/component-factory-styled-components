import React from 'react';

import { action } from '@storybook/addon-actions';

import { Button } from '../components/Button/Button';
import { MyNewThemedButton } from '../App';

export default {
  title: 'Styled Button',
};

export const Default = () => {
  return (
      <Button onClick={action('Styled button clicked')} variant="text" styleType="secondary">Button</Button>
  )
}

export const Contained = () => {
  return (
    <Button onClick={action('Styled button clicked')} variant="contained" styleType="primary">Button</Button>
  )
}

export const LinkCustomTheme = () => {
  return (
    <MyNewThemedButton styleType="primary" onClick={action('Styled button clicked')}>Styled Button</MyNewThemedButton>
  )
}
export const ContainedCustomTheme = () => {
  return (
    <MyNewThemedButton variant="contained" styleType="primary" onClick={action('Styled button clicked')}>Styled Button</MyNewThemedButton>
  )
}