import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { InputForm } from 'components/BasicComponents/InputForm';
import { PasswordInput } from 'components/BasicComponents/PasswordInput';
import { BaseForm } from 'components/BasicComponents/BaseForm';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <BaseForm handleSubmit={handleSubmit}>
      <InputForm name="email" />
      <PasswordInput />
      <Button type="submit" variant="contained" startIcon={<LoginIcon />}>
        Log In
      </Button>
    </BaseForm>
  );
};
