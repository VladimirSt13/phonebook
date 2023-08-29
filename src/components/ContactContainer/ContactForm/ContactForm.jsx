import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContactForUpdate,
  selectContacts,
} from 'src/redux/contacts/selectors';
import * as Yup from 'yup';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { contactsActions } from 'src/redux/contacts/contactsSlice';
import { useEffect } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Required')
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({ toggleModal }) => {
  const contacts = useSelector(selectContacts);
  const contactForUpdate = useSelector(selectContactForUpdate);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  useEffect(() => {
    if (contactForUpdate) {
      setValue('name', contactForUpdate.name);
      setValue('number', contactForUpdate.phone);
    }
  }, [contactForUpdate, setValue]);

  const checkContact = newName => {
    if (!contacts) {
      return;
    }
    return contacts.find(({ name }) => name === newName) ? true : false;
  };

  const addContact = data => {
    if (checkContact(data.name)) {
      alert(`${data.name} is already is in contacts`);
      return;
    }
    dispatch(contactsActions.addContact(data));
    reset();
    toggleModal();
  };

  const updateContact = data => {
    const contact = { name: data.name, phone: data.number };
    dispatch(
      contactsActions.updateContact({ id: contactForUpdate._id, contact })
    );
    dispatch(contactsActions.setContactForUpdate(null));
    reset();
    toggleModal();
  };

  const cancel = () => {
    if (contactForUpdate) {
      dispatch(contactsActions.setContactForUpdate(null));
    }
    reset();
    toggleModal();
  };

  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit(contactForUpdate ? updateContact : addContact)}
    >
      <Label>
        <span>Name</span>
        <Input type="text" placeholder="Name" {...register('name')} />
        <div style={{ height: 20, color: 'red', fontSize: 8 }}>
          {errors.name && <span>{errors.name?.message || 'Error !'}</span>}
        </div>
      </Label>

      <Label>
        <span>Phone number</span>
        <Input
          type="tel"
          placeholder="+000 000 00 00"
          {...register('number')}
        />
        <div style={{ height: 20, color: 'red', fontSize: 8 }}>
          {errors.number && <span>{errors.number?.message || 'Error !'}</span>}
        </div>
      </Label>

      <Button type="button" onClick={cancel}>
        Cancel
      </Button>

      <Button type="submit" disabled={!isValid}>
        {contactForUpdate ? 'Save' : 'Add contact'}
      </Button>
    </Form>
  );
};
