import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar, Container} from '@mui/material';
import { ToolbarStyled } from './AppBarCustom.styled';




export const AppBarCustom = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position='static'>
      <Container maxWidth="ms">
     <ToolbarStyled>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </ToolbarStyled>

      </Container>
 
    </AppBar>
  );
};
