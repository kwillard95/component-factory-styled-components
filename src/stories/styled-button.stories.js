import React from 'react';

import { action } from '@storybook/addon-actions';

import  MyNewThemedButton from '../App';

export default {
  title: 'Styled Button',
};

export const Default = () => {
  return <MyNewThemedButton onClick={action('Styled button clicked')}>Styled Button</MyNewThemedButton>
}