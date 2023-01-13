
import { Formik } from 'formik';
import {
  ErrorMsgName,
  ErrorMsgPhone,
  FormStyled,
  Input,
  Label,
} from './ContactForm.styled';
import { BsTelephoneForwardFill, BsPersonSquare } from 'react-icons/bs';
import * as yup from 'yup';
import 'yup-phone';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-hot-toast';

const valName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

export const ContactForm = () => {
  const startValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(25, 'Too Long!')
      .matches(
        valName,
        'Name may contain only letters, apostrophe, dash and spaces'
      )
      .required(),
    number: yup.string().phone('UA').required(),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addNewContact = ({ name, number }) => {
    contacts.find(contact => contact.name === name)
      ? toast(`${name} is already in contacts`, { icon: '⚠️' })
      : dispatch(addContact({ name, number })).then(
          toast(`Contact ${name} was added`, {
            icon: '👏',
          })
        );
  };

  const handleSubmit = (value, { resetForm }) => {
    addNewContact(value);
    resetForm();
  };

  return (
    <Formik
      initialValues={startValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label htmlFor="name">
          <BsPersonSquare size="20" />
          <Input type="text" name="name" placeholder="Name" autocomplite="on" />
          <ErrorMsgName name="name" component="div" />
        </Label>

        <Label htmlFor="tel">
          <BsTelephoneForwardFill size="20" />
          <Input type="tel" name="number" placeholder="Phone" />
          <ErrorMsgPhone name="number" component="span" />
        </Label>

        <Fab type="submit" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </FormStyled>
    </Formik>
  );
};
