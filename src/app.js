const express = require('express');
const helmet = require('helmet');

const app = express();

// Security middleware
app.use(helmet());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello Sandesh! Secure Web App is running 🚀');
});

module.exports = app;
