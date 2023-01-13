import styled from '@emotion/styled';
import { Box } from '@mui/system';

const StyledBox = styled(Box)`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
`;

export const BaseForm = ({ handleSubmit, children }) => {
  return (
    <StyledBox
      component="form"
      noValidate
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {children}
    </StyledBox>
  );
};
