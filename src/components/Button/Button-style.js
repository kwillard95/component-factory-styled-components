import { css } from "styled-components";

export const textStyle = ({ theme, ...rest }) => css`
  font-family: ${theme.typography.button.fontFamily};
  cursor: pointer;
  color: ${(props) =>
    props.primary
      ? theme.palette.primary.light
      : theme.palette.secondary.light};
  text-transform: ${theme.typography.button.textTransform};
  text-decoration: none;
  padding: 20px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  :hover {
    color: ${(props) =>
      props.primary
        ? theme.palette.primary.main
        : theme.palette.secondary.main};
    letter-spacing: 2px;
    transition: all 0.4s ease 0s;
  }
`;

export const containedStyle = ({ theme, ...rest }) => css`
  font-family: ${theme.typography.button.fontFamily};
  cursor: pointer;
  color: ${(props) =>
    props.primary
      ? theme.palette.primary.contrastText
      : theme.palette.secondary.contrastText};
  text-transform: ${theme.typography.button.textTransform};
  text-decoration: none;
  background: ${(props) =>
    props.primary
      ? theme.palette.primary.dark
      : theme.palette.secondary.dark};
  padding: 20px;
  border-radius: ${theme.shape.borderRadius};
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  :hover {
    background: ${(props) =>
      props.primary
        ? theme.palette.primary.main
        : theme.palette.secondary.main};
    color: ${(props) =>
      props.primaary
        ? theme.palette.common.black
        : theme.palette.common.black};
    letter-spacing: 2px;
    transition: all 0.4s ease 0s;
  }
`;
