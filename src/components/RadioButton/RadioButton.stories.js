import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import RadioButton from './RadioButton';

export default {
  title: 'Radio Button',
};

export const Default = () => {

  const [isFemaleSelected, setIsFemaleSelected] = useState(false);
  const [isMaleSelected, setIsMaleSelected] = useState(false);

  const toggleButton = (e) => {
    stateHandler(e.target.value);
  };

  const stateHandler = (value) => {
    if (value === 'female') {
      setIsFemaleSelected(!isFemaleSelected);
    } else {
      setIsMaleSelected(!isMaleSelected);
    }
  }

  return (
    <div>
      <RadioButton label="Female" name="female" value="female" checked={isFemaleSelected} onClick={toggleButton}/>
      <RadioButton label="Male" name="male" value="male" checked={isMaleSelected} onClick={toggleButton}/>
    </div>
  )
}