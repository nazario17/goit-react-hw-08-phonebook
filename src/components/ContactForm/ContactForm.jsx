import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addContact } from 'redux/contacts/contactsOperations';
import contactsSelector from 'redux/contacts/contactsSelectors';

import { StyledForm, StyledInput, StyledButton } from './ContactFormStyled';

const ContactForms = () => {
  const uniqueId = nanoid();

  const contactsList = useSelector(contactsSelector.selectContacts);

  const dispatch = useDispatch();

  const handleSubmitForm = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = event.target.number.value;

    const isDuplicateName = contactsList.some(contacts =>
      contacts.name.toLowerCase().includes(name.toLowerCase())
    );

    if (isDuplicateName) {
      toast.error(`${name} is alredy to contacts`);
      return;
    }

    const contact = { name, number };
    event.target.reset();

    dispatch(addContact(contact));
  };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <label htmlFor={uniqueId}>
        Name
        <StyledInput
          type="text"
          name="name"
          id={uniqueId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={uniqueId}>
        Number
        <StyledInput
          type="tel"
          name="number"
          id={uniqueId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <StyledButton type="submit">Add contact</StyledButton>
    </StyledForm>
  );
};

export default ContactForms;
