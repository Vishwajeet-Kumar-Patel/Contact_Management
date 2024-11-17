import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts';

export const getContacts = async () => {
  return await axios.get(API_URL);
};

export const createContact = async (contact) => {
  return await axios.post(API_URL, contact);
};

export const updateContact = async (id, contact) => {
  return await axios.put(`${API_URL}/${id}`, contact);
};

export const deleteContact = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};