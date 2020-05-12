import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { RadioButton } from '../components/RadioButton/RadioButton';

export default {
  title: 'Radio Button',
};

export const Default = () => {

  const [isSelected, setIsSelected] = useState(false);

  const toggleButton = () => {
    setIsSelected(!isSelected);
    action('Radio button clicked');
  }

  return (
    <div>
      <RadioButton label="Female" name="gender" value="female" checked={isSelected} onClick={toggleButton}/>
    </div>
  )
}