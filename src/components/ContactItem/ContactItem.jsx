import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';
import { toUpperCaseMaker } from 'helpers/firstLetter';

export const ListItemCustom = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
`;



export const ContactItem = ({ id, name, number }) => {
  const upperName = toUpperCaseMaker(name);
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContact(id)).then(console.log(`Contact ${upperName} was delete`));
  return (
    <ListItemCustom>
      <ListItemAvatar>
        <Avatar alt={upperName} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={upperName }
        secondary={
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {number}
          </Typography>
        }
      />
      <IconButton aria-label="delete" type="button" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </ListItemCustom>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
