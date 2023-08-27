import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'src/redux/contacts/operations';
import { selectContacts } from 'src/redux/contacts/selectors';
import * as Yup from 'yup';
import { Button, Form, Input, Label } from './ContactForm.styled';

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

export const ContactForm = ({ onAddContact }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: initialValues,
    mode: 'onBlur',
  });

  const checkContact = newName => {
    if (!contacts) {
      return;
    }
    return contacts.find(({ name }) => name === newName) ? true : false;
  };

  const onSubmit = data => {
    if (checkContact(data.name)) {
      alert(`${data.name} is already is in contacts`);
      return;
    }
    dispatch(addContact(data));
    onAddContact();
    reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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

      <Button type="submit" disabled={!isValid}>
        Add contact
      </Button>
    </Form>
  );
};
