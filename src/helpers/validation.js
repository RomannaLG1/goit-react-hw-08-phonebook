import { toast } from 'react-hot-toast';

export const validateRegisterForm = (name, email, password) => {
  if (!name || !email || !password) {
    // toast.error(
    //   'there should be a disabled button here, but it is currently in progress, so please fill in all the fields'
    // );
    return false;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    toast.error('Please, enter valid e-mail');
    return false;
  }
  if (password.length < 8) {
    toast.error('Please, enter valid password');
    return false;
  }
  return true;
};

export const validateLoginForm = (email, password) => {
  if (!email || !password) {
    toast.error('there should be a disabled button here, but it is currently in progress, so please fill in all the fields');
    return false;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    toast.error('Please, enter valid e-mail');
    return false;
  }
  if (password.length < 8) {
    toast.error('Please, enter valid password');
    return false;
  }
  return true;
};
