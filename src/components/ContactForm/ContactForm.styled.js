import styled from 'styled-components';
// import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
width: 300px;
 display: flex;
 justify-content: center;
gap: 35px;
  flex-direction: column;
margin: 30px auto;

`;

export const Label = styled.label`
 display: flex;
 align-items: center;
 gap: 10px;
color: ${p => p.theme.colors.primary};
transition: color 250ms linear;
&:hover, :focus {
  color: ${p => p.theme.colors.accent};
}

`;

export const Input = styled(Field)`
display: inline-block;
padding: ${p => p.theme.space[3]}px;
width: 300px;
color: ${p => p.theme.colors.primary};
border: none;
border-bottom: 1px solid ${p => p.theme.colors.primary};
outline: none;

/* border-radius: ${p => p.theme.radii.medium}; */
font-size: ${p => p.theme.fontSizes[6]};
transition: border 250ms linear;
text-transform: capitalize;
&:first-letter {
    text-transform: uppercase;
}
&:hover, :focus ,:focus-visible{
    outline: none;
    border-bottom: 1px solid ${p => p.theme.colors.accent};
}
&::placeholder{
  color: ${p => p.theme.colors.secondary};
}
`;

export const ErrorMsgName = styled(ErrorMessage)`
position: absolute;
top: 103px;
left: 83px;
color: ${p => p.theme.colors.warning};
font-size: ${p => p.theme.fontSizes[6]};


`;

export const ErrorMsgPhone = styled(ErrorMessage)`
position: absolute;
top: 176px;
left: 17px;
color: ${p => p.theme.colors.warning};
font-size: ${p => p.theme.fontSizes[6]};
`;
export const FormBtn = styled.button`
width: 130px;
display: flex;
justify-content: space-between;
align-items: center;
color: ${p => p.theme.colors.primary};
  background-color: transparent;
  padding: ${p => p.theme.space[3]}px;
  /* border: 2px solid ${p => p.theme.colors.primary}; */
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.medium};
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus{
    cursor: pointer;
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.text};
    border: ${p => p.theme.borders.none};
    outline: none;
  }
`;