// backend/routes/stops.js
const express = require('express');
const router = express.Router();
const { getAllStops } = require('../controllers/stopController');

// GET /api/stops
router.get('/', getAllStops);

// Add more routes as needed (e.g., POST /api/stops, PUT /api/stops/:id, DELETE /api/stops/:id)

module.exports = router;
