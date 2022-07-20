import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { name, number } = contact;
    const response = await axios.post('/contacts', { name, number });
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);
