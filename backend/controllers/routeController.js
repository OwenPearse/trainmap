// backend/controllers/routeController.js
const express = require('express');
const router = express.Router();
const { getRoutesByType } = require('../services/dataFetcher');

/**
 * GET /api/routes/:type
 * e.g. /api/routes/0 => get train routes
 *      /api/routes/1 => get tram routes
 */
router.get('/:type', async (req, res) => {
  try {
    const routeType = parseInt(req.params.type, 10);
    const data = await getRoutesByType(routeType);
    res.json(data);
  } catch (error) {
    console.error('Error in routeController:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
