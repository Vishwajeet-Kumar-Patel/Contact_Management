import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import { getContacts } from './services/contactService';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await getContacts();
      setContacts(response.data);
    };

    fetchContacts();
  }, []);

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleFormSubmit = (updatedContact) => {
    if (editingContact) {
      setContacts(contacts.map(contact => contact._id === updatedContact._id ? updatedContact : contact));
      window.alert('Contact updated');
    } else {
      setContacts([...contacts, updatedContact]);
      window.alert('Contact added');
    }
    setEditingContact(null);
  };

  return (
    <div>
      <h1>Contact Management System</h1>
      <AddContactForm contact={editingContact} onFormSubmit={handleFormSubmit} />
      <ContactList onEdit={handleEdit} />
    </div>
  );
};

export default App;