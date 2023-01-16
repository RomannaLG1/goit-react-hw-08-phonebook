import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
 } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/system';



export const ContactFormWrapper = ({ children }) => {
  return (
    <Container  style={{ marginTop: 30 }} maxWidth="xs">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="primary"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" color="primary">Add new contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
