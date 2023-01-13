import { Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { PasswordInput } from 'components/BasicComponents/PasswordInput';
import { InputForm } from 'components/BasicComponents/InputForm';
import { BaseForm } from 'components/BasicComponents/BaseForm';
import { validateRegisterForm } from 'helpers/validation';
import { useEffect, useState } from 'react';


export const RegisterForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (validateRegisterForm(form.elements.name.value, form.elements.email.value, form.elements.password.value)) {
     
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      )
      form.reset();
    } 
    
  };

  return (

      <BaseForm handleSubmit={handleSubmit}>
        <InputForm name="name" />
        <InputForm name="email" />
        <PasswordInput />
        <Button type="submit" variant="contained" startIcon={<HowToRegIcon />}>
          Register
        </Button>
      </BaseForm>
 
  );
};
