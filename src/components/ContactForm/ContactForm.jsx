import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const checkContact = newName =>
    contacts.find(({ name }) => name === newName) ? true : false;

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();

    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;

    if (checkContact(name)) {
      alert(`${name} is already is in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  return (
    <Form autoComplete="off" onSubmit={onSubmitForm}>
      <Label htmlFor="name">
        <span>Name</span>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>

      <Label htmlFor="number">
        <span>Number</span>
        <Input
          type="tel"
          name="number"
          placeholder="Tel number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
