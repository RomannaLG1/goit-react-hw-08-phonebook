import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { InputForm } from 'components/BasicComponents/InputForm';
import { PasswordInput } from 'components/BasicComponents/PasswordInput';
import { BaseForm } from 'components/BasicComponents/BaseForm';
import { useInput } from 'hooks';
import { ErrorInput } from 'components/BasicComponents/ErrorInput';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: false });
  const password = useInput('', { isEmpty: true, minLength: 8, maxLength: 15 });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    ).then(console.log('wellcome')).cath(e => console.log(e.massege));
    form.reset();
  };

  return (
    <BaseForm handleSubmit={handleSubmit}>
        <InputForm
        onChange={e => email.onChange(e)}
        onBlur={e => email.onBlur(e)}
        value={email.value}
        name="email"
      />
      {/* {email.isDirty && email.isEmpty && <ErrorInput>{'enter email'}</ErrorInput>} */}
      {email.isDirty && email.emailError && <ErrorInput>{'please, enter valid email'}</ErrorInput>}
      <PasswordInput
        onChange={e => password.onChange(e)}
        onBlur={e => password.onBlur(e)}
        value={password.value}
      />
      {/* {password.isDirty && password.isEmpty && <ErrorInput>{'enter password'}</ErrorInput>} */}
      {password.isDirty && password.minLengthError && <ErrorInput>{'to short, min 3 characters'}</ErrorInput>}
      {password.isDirty && password.maxLengthError && <ErrorInput>{'to long'}</ErrorInput>}
      <Button  disabled={ !email.inputValid || !password.inputValid} type="submit" variant="contained" startIcon={<LoginIcon />}>
        Log In
      </Button>
    </BaseForm>
  );
};
