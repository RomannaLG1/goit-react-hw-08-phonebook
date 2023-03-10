import { ContactListStyled } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';



export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id}></ContactItem>
      ))}
    </ContactListStyled>
  );
};
