import PropTypes from 'prop-types';
import {
  ListItemStyled,
  DeleteButton,
  ItemText,
  ItemLink,
} from './ContactItem.styled';
import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';


export const ContactItem = ({id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
  <ListItemStyled>
    <ItemLink>
      <ItemText>{name}</ItemText>
      <ItemText>{number}</ItemText>
      <DeleteButton type="button" onClick={handleDelete}>
        <TiDelete size="20" />
      </DeleteButton>
    </ItemLink>
  </ListItemStyled>
);}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};