// backend/controllers/RoutesController.js
const express = require('express');
const router = express.Router();
const { fetchFromPTV } = require('../services/ptvService');

/**
 * GET /api/allroutes
 * Fetches all routes for transport types 0, 1, and 2 (trains, trams, buses)
 * and aggregates them into a single JSON response.
 */
router.get('/', async (req, res) => {
  try {
    const types = [0, 1, 2];
    // Launch parallel requests for each transport type
    const promises = types.map(type =>
      fetchFromPTV(`/v3/routes?route_types=${type}`)
    );
    const results = await Promise.all(promises);

    // Assuming each result has a "routes" property, combine them.
    const allRoutes = results.reduce((acc, data) => {
      if (data.routes) {
        return acc.concat(data.routes);
      }
      return acc;
    }, []);

    res.json({ routes: allRoutes });
  } catch (error) {
    console.error('Error in RoutesController:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
