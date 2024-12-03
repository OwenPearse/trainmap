// backend/routes/routeRoutes.js
const express = require('express');
const router = express.Router();
const { getAllRoutes } = require('../controllers/routeController');

// GET /api/routes
router.get('/', getAllRoutes);

// Add more routes as needed (e.g., POST /api/routes, PUT /api/routes/:id, DELETE /api/routes/:id)

module.exports = router;
