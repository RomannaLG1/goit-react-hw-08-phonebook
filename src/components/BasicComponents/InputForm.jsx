import { FormControl, Input, InputLabel } from '@mui/material';
import { toUpperCaseMaker } from 'helpers/firstLetter';

export const InputForm = ({ name }) => {
    
  return (
    <FormControl fullWidth sx={{ m: 3 }} variant="standard">
      <InputLabel htmlFor={`standard-adornment-${name}`}>{toUpperCaseMaker(name)}</InputLabel>
      <Input name={name} type={name} required minLength="4"/>
    </FormControl>
  );
};
