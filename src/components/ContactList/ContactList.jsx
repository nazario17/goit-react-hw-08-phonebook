import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contactsSelector from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';

import Loader from 'components/Loader/Loader';
import { StyledButton } from '../ContactForm/ContactFormStyled';
import {
  StyledContactList,
  StyledContactItem,
  Wrapper,
} from './ContactListStyled';

const ContactList = () => {
  const contactsList = useSelector(contactsSelector.selectContactsState);
  const { isLoading, error, items } = contactsList;

  const contactsArray = useSelector(contactsSelector.selectContacts);

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const visibleContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {!isLoading && !contactsArray.length > 0 && (
        <div>Oops, your contact list is empty. Add someone</div>
      )}

      <StyledContactList>
        {visibleContacts.map(({ id, name, number }) => (
          <StyledContactItem key={id}>
            <Wrapper>{name}</Wrapper>
            <Wrapper>{number}</Wrapper>

            <StyledButton
              onClick={() =>
                dispatch(deleteContact(id))
                  .unwrap()
                  .then(() => toast.success('Contact removed'))
                  .catch(() => toast.error('Something went wrong...Try again.'))
              }
            >
              Delete
            </StyledButton>
          </StyledContactItem>
        ))}
      </StyledContactList>
    </>
  );
};

export default ContactList;
