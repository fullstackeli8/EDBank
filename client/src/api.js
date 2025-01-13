// API call functions (Axios instance)

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default api;


//  GET request
api.get('/user-profile')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

//  POST request with data
api.post('/transaction', { amount: 100, recipient: 'John Doe' })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
