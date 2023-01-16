import styled from "styled-components"


const Wrapper = styled.div`
    height: 16px;
    margin-bottom: 8px;
`

const Text = styled.p`
    color: red;
    font-size: 12px;
    &::before {
  display: inline;
  content: "⚠ ";
}
`

export const ErrorInput = ({children}) => {
    return(
        <Wrapper>
            <Text>{children}</Text>
        </Wrapper>
    )
}