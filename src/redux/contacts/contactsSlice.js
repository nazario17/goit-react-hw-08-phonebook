import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './contactsOperations';
import { logOut } from 'redux/auth/authOperations';
import {
  handlePending,
  handleRejected,
  handleFetchContacts,
  handleAddContact,
  handleDeleteContact,
  handleLogOut,
} from './contactsReducers';
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(logOut.fulfilled, handleLogOut)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending),

  // {
  //   [fetchContacts.pending](state, action) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.items = action.payload;
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [addContact.pending](state, action) {
  //     state.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.items.push(action.payload);
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [addContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  //   [deleteContact.pending](state, action) {
  //     state.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     const index = state.items.findIndex(
  //       item => item.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;
