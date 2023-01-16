import { Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export const RegisterButton = () => {
    return(
        <Button type="submit" variant="contained" startIcon={<HowToRegIcon />}>
        Register
      </Button>
    )
}


