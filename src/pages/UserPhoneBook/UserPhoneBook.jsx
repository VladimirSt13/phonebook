import React from 'react';
import { useEffect } from 'react';
import { Box } from 'components/Commons/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function UserPhoneBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box display="flex" gap="20px" px="16px">
        <Box>
          <Box as="h1">Phonebook</Box>
          <ContactForm />
        </Box>
        <Box ml="10px">
          <Box as="h2">Contacts</Box>
          <Filter />
          {isLoading && <div>Loading...</div>}
          {error && <div>Try again later...</div>}
          <ContactList />
        </Box>
      </Box>
    </>
  );
}
