import React, { useState } from 'react';
import { StyledInput, StyledBtn, StyledForm } from './FormAdd.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectPhones } from 'Redux/phoneSelectors';
import { addContactThunk } from 'Redux/phoneOperations';

export const FormAdd = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onNameChange = e => {
    setName(e.target.value);
  };
  const onNumberChange = e => {
    setNumber(e.target.value);
  };

  const dispatch = useDispatch();
  const totalContacts = useSelector(selectPhones);

  const onFormSubmit = e => {
    e.preventDefault();
    if (
      totalContacts.find(
        el => el.name.toLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContactThunk(newContact));
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <label>
        {' '}
        Name:
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onNameChange}
          value={name}
        />
      </label>
      <label>
        Phone:
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onNumberChange}
          value={number}
        />
      </label>

      <StyledBtn type="submit">Add Contact</StyledBtn>
    </StyledForm>
  );
};
