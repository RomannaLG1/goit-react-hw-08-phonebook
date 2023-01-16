import { FormControl, Input, InputLabel } from '@mui/material';
import { toUpperCaseMaker } from 'helpers/firstLetter';

export const InputForm = ({onChange, onBlur, name,  value }) => {
    
  return (
    <FormControl fullWidth sx={{ mb: 1 }} variant="standard">
      <InputLabel htmlFor={`standard-adornment-${name}`}>{toUpperCaseMaker(name)}</InputLabel>
      <Input onChange={onChange} onBlur={onBlur} value={value} name={name} type={name}  />
    </FormControl>
  );
};


