import React from "react";
import styled from "styled-components";

import Theme from '../Theme/Theme'
import { FormFieldInputStyle, FormFieldLabelStyle } from "./FormField-style";

export const FormFieldInput = styled.input([FormFieldInputStyle]);
export const FormFieldLabel = styled.label([FormFieldLabelStyle]);

const FormField = ({
  onChange,
  placeholder,
  label,
  name,
  primary
}) => {

    return (
      <Theme>
      <FormFieldInput primary={primary} id={name} placeholder={placeholder}/>
      <FormFieldLabel for={name}>{label}</FormFieldLabel>
      </Theme>
    );
};

export default FormField;
