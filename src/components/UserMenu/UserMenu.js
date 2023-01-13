import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button, Typography } from '@mui/material';
import { LoginOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <AccountCircleIcon fontSize="large" />
      <Typography variant="h6" component="p">
        Welcome, {user.name}
      </Typography>

      <Button
        type="button"
        startIcon={<LoginOutlined />}
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
