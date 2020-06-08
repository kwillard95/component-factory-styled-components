import React from "react";
import styled from "styled-components";

import Theme from '../Theme/Theme'
import { RootStyle, FillStyle, InputStyle } from './RadioButton-style';

const Root = styled.div([RootStyle]);
export const Fill = styled.div([FillStyle]);
const Input = styled.input([InputStyle]);

const RadioButton = ({
  onChange,
  onClick,
  name,
  label,
  value,
  checked,
  children,
}) => {

  return (
    <Theme>
    <Root>
      <label>
        {label}
        <Input 
          type="radio"
          value={value}
          onClick={onClick}
          onChange={onChange}
          name={name}
          checked={checked}
        />
        <Fill />
      </label>
    </Root>
    </Theme>
  );
};

export default RadioButton;
