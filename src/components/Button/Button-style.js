import { css } from 'styled-components';


const style = ({ theme, ...rest }) => css`
  border-color: ${props => props.variant === 'primary' ? theme.palette.primary.dark : theme.palette.secondary.dark };
  background-color: ${props => props.variant === 'primary' ? theme.palette.primary.light : theme.palette.secondary.light };
  color: ${props => props.variant === 'primary' ? theme.palette.primary.contrastText : theme.palette.secondary.contrastText };
  border-radius: ${theme.shape.borderRadius};
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  font-size: 24px;
  :hover {
    color: ${props => props.variant === 'primary' ? theme.palette.primary.dark : theme.palette.secondary.dark };
    background-color: ${props => props.variant === 'primary' ? theme.palette.primary.main : theme.palette.secondary.main };
  } 
`;

export default style;




// props.variant ? 