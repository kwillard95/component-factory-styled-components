import { css } from "styled-components";

import { FormFieldLabel } from "./FormField";

export const FormFieldLabelStyle = ({ theme, ...rest }) => css`
  font-family: ${theme.typography.button.fontFamily};
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
  transform: translateY(0rem);
`;

export const FormFieldInputStyle = ({ theme, ...rest }) => css`
  font-family: ${theme.typography.button.fontFamily};
  color: ${(props) =>
    props.primary ? theme.palette.primary.dark : theme.palette.secondary.dark};
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.primary
      ? theme.palette.primary.light
      : theme.palette.secondary.light};
  border: none;
  width: 150px;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;

  :placeholder-shown + ${FormFieldLabel} {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
`;

