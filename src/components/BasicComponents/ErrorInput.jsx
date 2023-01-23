import styled from 'styled-components';


const WrapperStyled = styled.div`
  height: 16px;
  margin-bottom: 8px;
`;

const Text = styled.p`
  color: red;
  font-size: 12px;
  &::before {
    display: inline;
    content: '⚠ ';
  }

`;

export const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export const ErrorInput = ({ children }) => {
  return <Text>{children}</Text>;
};
