import {
  createSlice,
  isFulfilled,
  isRejectedWithValue,
  isPending,
} from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const initialState = {
  contacts: [],
  contactForUpdate: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  console.log('file: contactsSlice.js:26  handleRejected  action:', action);

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
  reducers: {
    setContactForUpdate(state, action) {
      state.contactForUpdate = action.payload;
    },
  },
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
      .addCase(updateContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        );
        state.contactForUpdate = null;
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
  updateContact,
  deleteContact,
};

export { contactsReducer, contactsActions };
