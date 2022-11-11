import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Box } from 'components/Commons/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box width="1024px" mx="auto" display="flex" gap="20px">
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
  );
};
