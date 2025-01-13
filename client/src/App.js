// main app component

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const registerUser = async (username, password) => {
    try {
      await axios.post('http://localhost:5000/api/users/register', { username, password });
      alert('User registered successfully!');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const loginUser = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Router>
      <div>
        <h1>Banking App</h1>
        {!token ? (
          <div>
            <h2>Login</h2>
            <button onClick={() => loginUser('test', 'password')}>Login as Test User</button>
            <h2>Register</h2>
            <button onClick={() => registerUser('test', 'password')}>Register Test User</button>
          </div>
        ) : (
          <div>
            <h2>Welcome</h2>
            <button onClick={() => {
              localStorage.removeItem('token');
              setToken(null);
            }}>Logout</button>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
