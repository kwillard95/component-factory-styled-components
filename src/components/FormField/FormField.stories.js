import React from 'react';

import { action } from '@storybook/addon-actions';

import FormField from './FormField';

export default {
  title: 'Form Field',
};

export const Default = () => {
  return (
    <div>
      <FormField placeholder='Full Name' label='Full Name' name='name' primary/>
      <br />
      <br />
      <FormField placeholder='Full Name' label='Full Name' name='name'/>

    </div>
  )
}


