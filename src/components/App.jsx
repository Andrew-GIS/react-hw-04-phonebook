import { useState, useEffect } from 'react';
import { PhoneSection } from './PhoneForm/PhoneForm';
import { ContactForm } from './Contacts/ContactSection';
import { FilterSection } from './Filter/Filter';
import { nanoid } from "nanoid";

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
    //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const onChangeFilter = event => {
    setFilter(event.target.value);
  }

  const addContact = ({ name, number }) => {
    try {
      setContacts(contacts => {
      if (contacts.find(contact => (contact.name.toLowerCase() === name.toLowerCase()))) {
        alert(`${name} is already in contacts.`);
        return [...contacts];
      }
      else {
        const id = nanoid();
        return [...contacts, { id: id, name, number }];
      }
    })
      
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const deleteContact = (id) => {
    const stateAfterRemove = contacts.filter(contact => contact.id !== id);
    setContacts(stateAfterRemove);
  }

  const getFilteredContact = () => {
    const newContacts = contacts.filter(contact => contact.name.toString().toLowerCase().includes(filter));
    return newContacts;
  }

    return (
      <>
        <h1 className='primaryTitle'>Phonebook</h1>
        <PhoneSection onSubmit={addContact} />
        <FilterSection title={"Find contacts by name"} value={filter} onChange={onChangeFilter}/>
        <h2 className='secondaryTitle'>Contacts</h2>
        {(contacts.length === 0)
          ? (<h3 className='warningText'>No Contects in your PhoneBook</h3>)
          : (<ContactForm contacts={getFilteredContact()} onDeleteContact={deleteContact} />)}
      </>
    );
}