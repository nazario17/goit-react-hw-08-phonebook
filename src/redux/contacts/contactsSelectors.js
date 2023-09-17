const selectContacts = state => state.contacts.items;
const selectContactsState = state => state.contacts;

const contactsSelector = {
  selectContacts,
  selectContactsState,
};

export default contactsSelector;
