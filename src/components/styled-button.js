import React from 'react';
import styled, { css } from 'styled-components';

// PRIMITIVE SOLUTIION
// Seperate core button styles (borderwidth, padding, etc.) from button theme

// const theme = {
//   button: {
//     backgroundColor: 'white',
//     borderColor: 'red',
//     color: 'blue',
//   },
// }

// const createButtonStyleFromTheme = ({button}) => ({
//   borderColor: button.borderColor,
//   backgroundColor: button.backgroundColor,
//   color: button.color,
//   borderWidth: '2px',
//   borderStyle: 'solid',
//   padding: '10px',
//   fontSize: '24px',
// })

// const buttonStyle = createButtonStyleFromTheme(theme);

// const StyledButton = (props) => (
//   <button style={buttonStyle}>{props.children}</button>
// )

// export default StyledButton;


// STYLED COMPONENTS SOLUTION

const style = ({ theme, ...rest }) => css`
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.lightest};
  color: ${theme.colors.secondary};
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  font-size: 24px;
  :hover {
    color: ${theme.colors.lightest};
    background-color: ${theme.colors.secondary};
  } 
`;

const ButtonBase = styled.button([style]);

export const Button = ({ onClick, children }) => (
  <ButtonBase onClick={onClick}>{children}</ButtonBase>
)
