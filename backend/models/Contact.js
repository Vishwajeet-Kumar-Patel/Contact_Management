const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
  },
  jobTitle: {
    type: String,
    required: [true, 'Job title is required'],
  },
});

module.exports = mongoose.model('Contact', ContactSchema);