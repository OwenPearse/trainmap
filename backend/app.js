// backend/app.js
const express = require('express');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
const connectDB = require('./config/db');
const redisClient = require('./config/redis');
const routeController = require('./controllers/routeController');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/routes', routeController);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;