// backend/app.js
const express = require('express');
const cors = require('cors');
const routeRoutes = require('./routes/routeRoutes');
const stopRoutes = require('./routes/stopRoutes');
const errorHandler = require('./utils/errorHandler');
const connectDB = require('./config/db');
const redisClient = require('./config/redis');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/routes', routeRoutes);
app.use('/api/stops', stopRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;