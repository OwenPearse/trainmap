// backend/app.js
const express = require('express');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
const connectDB = require('./config/db');
require('dotenv').config(); 

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Mount API routes
app.use('/api/allroutes', require('./controllers/routeController'));
app.use('/api/allstops', require('./controllers/stopController'));

// Error Handling Middleware
app.use(errorHandler);

// Scheduled jobs
require('./jobs/updateRoutesAndStops');

module.exports = app;
