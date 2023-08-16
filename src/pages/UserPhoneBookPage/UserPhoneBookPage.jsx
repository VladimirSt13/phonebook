import React from 'react';
import { useEffect } from 'react';
import { Box } from 'components/Commons/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export default function UserPhoneBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Add contact
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Box bg={p => p.theme.colors.background}>
            <ContactForm onAddContact={toggleModal} />
          </Box>
        </Modal>
      )}
      <Box as="h1">Phonebook</Box>
      <Filter />
      {isLoading && <div>Loading...</div>}
      {error && <div>Try again later...</div>}
      <ContactList />
    </>
  );
}
