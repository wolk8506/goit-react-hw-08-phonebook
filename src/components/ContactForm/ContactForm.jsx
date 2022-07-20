import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from 'components/ContactForm/ContactForm.module.css';
import { toast } from 'react-toastify';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { TextField, Button } from '@mui/material';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const includesContact = contacts.find(c =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
    if (includesContact !== undefined) {
      toast.warn(`${name} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        name: name,
        number: number,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.input}>
        <TextField
          label="Name"
          variant="filled"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          color="success"
        />
        <TextField
          label="Number"
          variant="filled"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          color="success"
        />
      </div>
      <Button type="submit" variant="outlined" color="success">
        Add contact
      </Button>
    </form>
  );
}
