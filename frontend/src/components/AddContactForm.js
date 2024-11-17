import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createContact, updateContact } from '../services/contactService';
import './AddContactForm.css';


const AddContactForm = ({ contact, onFormSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setEmail(contact.email);
      setPhone(contact.phone);
      setCompany(contact.company);
      setJobTitle(contact.jobTitle);
    } else {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setJobTitle('');
    }
  }, [contact]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newContact = { firstName, lastName, email, phone, company, jobTitle };
    if (contact) {
      const updatedContact = await updateContact(contact._id, newContact);
      onFormSubmit(updatedContact.data);
    } else {
      const createdContact = await createContact(newContact);
      onFormSubmit(createdContact.data);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {contact ? 'Edit Contact' : 'Add New Contact'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            label="Last Name"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Phone Number"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            label="Company"
            fullWidth
            margin="normal"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <TextField
            label="Job Title"
            fullWidth
            margin="normal"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            {contact ? 'Update Contact' : 'Add Contact'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddContactForm;