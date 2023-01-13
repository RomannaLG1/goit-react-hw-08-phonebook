import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FilterForm = styled(Form) `
width: 300px;
 display: flex;
 justify-content: center;
gap: 35px;
  flex-direction: column;
margin: 30px auto;
`;

export const FilterLabel = styled.label`
color: ${p => p.theme.colors.primary};
display: flex;
align-items: center;
gap: 10px;
transition: color 250ms linear;
&:hover, :focus {
    color: ${p => p.theme.colors.accent};
}
`;

export const FilterInput = styled(Field)`
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

`
