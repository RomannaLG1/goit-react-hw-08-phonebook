import { Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { PasswordInput } from 'components/BasicComponents/PasswordInput';
import { InputForm } from 'components/BasicComponents/InputForm';
import { BaseForm } from 'components/BasicComponents/BaseForm';
import { useInput } from 'hooks';
import { ErrorInput } from 'components/BasicComponents/ErrorInput';



export const RegisterForm = () => {
  const dispatch = useDispatch();

  const name = useInput('', { isEmpty: true, minLength: 3, maxLength: 15 });
  const email = useInput('', { isEmpty: true, minLength: 3, isEmail: false });
  const password = useInput('', { isEmpty: true, minLength: 8, maxLength: 15 });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <BaseForm handleSubmit={handleSubmit}>
      <InputForm
    
        onChange={e => name.onChange(e)}
        onBlur={e => name.onBlur(e)}
        value={name.value}
        name="name"
      />
      {/* {name.isDirty && name.isEmpty && <ErrorInput>{'enter name'}</ErrorInput>} */}
      {name.isDirty && name.minLengthError && <ErrorInput>{'to short, min 3 characters'}</ErrorInput>}
      {name.isDirty && name.maxLengthError && <ErrorInput>{'to long'}</ErrorInput>}
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
      <Button
        disabled={!name.inputValid || !email.inputValid || !password.inputValid}
        type="submit"
        variant="contained"
        startIcon={<HowToRegIcon />}
      >
        Register
      </Button>
    </BaseForm>
  );
};
