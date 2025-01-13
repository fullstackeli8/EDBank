// load environment variables in app
require('dotenv').config();

const jwtSecret = process.env.JWT_SECRET; // access the JWT secret
const dbUri = process.env.DB_URI; // access the DB URI

// main entry point for Express server
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', userRoutes);

// test database connection
sequelize.authenticate().then(() => {
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});
