import {
  createSlice,
  isFulfilled,
  isRejectedWithValue,
  isPending,
} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => action.payload.contact._id !== contact._id
        );
      })
      .addMatcher(isPending(), handlePending)
      .addMatcher(isRejectedWithValue(), handleRejected)
      .addMatcher(isFulfilled(), handleFulfilled),
});

const { reducer: contactsReducer, actions } = contactsSlice;

const contactsActions = {
  ...actions,
  fetchContacts,
  addContact,
  deleteContact,
};

export { contactsReducer, contactsActions };
