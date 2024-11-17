const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new contact
router.post('/', async (req, res) => {
  const contact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    company: req.body.company,
    jobTitle: req.body.jobTitle,
  });

  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      console.error('Validation Error:', messages);
      return res.status(400).json({ message: messages.join(', ') });
    }
    if (err.code === 11000) {
      console.error('Duplicate Entry Error:', err.message);
      return res.status(400).json({ message: 'Duplicate entry detected' });
    }
    console.error('Server Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a contact
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    contact.firstName = req.body.firstName;
    contact.lastName = req.body.lastName;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.company = req.body.company;
    contact.jobTitle = req.body.jobTitle;

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);
      console.error('Validation Error:', messages);
      return res.status(400).json({ message: messages.join(', ') });
    }
    if (err.code === 11000) {
      console.error('Duplicate Entry Error:', err.message);
      return res.status(400).json({ message: 'Duplicate entry detected' });
    }
    console.error('Server Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.json({ message: 'Contact removed' });
  } catch (err) {
    console.error('Server Error:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;