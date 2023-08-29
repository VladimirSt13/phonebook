import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from 'src/components';
import { ContactForm } from 'src/components/ContactContainer/ContactForm/ContactForm';
import { ContactList } from 'src/components/ContactContainer/ContactList/ContactList';
import { Filter } from 'src/components/Filter/Filter';
import { selectError, selectIsLoading } from 'src/redux/contacts/selectors';

import { useState } from 'react';
import { Modal } from 'src/components/Modal/Modal';
import { contactsActions } from 'src/redux';
import { Loader } from 'src/components/Loader/Loader';

export default function UserPhoneBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    dispatch(contactsActions.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <button type="button" onClick={toggleModal}>
        Add contact
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm toggleModal={toggleModal} />
        </Modal>
      )}
      <Box as="h1">Phonebook</Box>

      <Filter />

      {isLoading && <Loader />}

      {error && <div>Try again later...</div>}

      <ContactList toggleModal={toggleModal} />
    </>
  );
}
