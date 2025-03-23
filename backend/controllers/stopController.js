// backend/controllers/StopsController.js
const express = require('express');
const router = express.Router();
const { fetchFromPTV } = require('../services/ptvService');
const { getAllRoutes } = require('../services/aggregateRoutes');

/**
 * GET /api/allstops
 * Aggregates stops for all routes using the v3 endpoint:
 *   /v3/stops/route/{route_id}/route_type/{route_type}
 */
router.get('/', async (req, res) => {
  try {
    // Retrieve all routes across the desired transport types.
    const allRoutes = await getAllRoutes();
    
    // For each route, fetch its stops using the v3 endpoint.
    const stopsPromises = allRoutes.map(async (route) => {
      const routeId = route.route_id;
      const routeType = route.route_type;
      const endpoint = `/v3/stops/route/${routeId}/route_type/${routeType}`;
      try {
        const data = await fetchFromPTV(endpoint);
        // Assume the response includes a "stops" property.
        return data.stops || [];
      } catch (error) {
        console.error(`Error fetching stops for route ${routeId}:`, error.message);
        // If the endpoint returns 404 or fails, return an empty array for that route.
        return [];
      }
    });
    
    // Wait for all stops calls to complete and flatten the array.
    const stopsArrays = await Promise.all(stopsPromises);
    const allStops = stopsArrays.flat();
    
    res.json({ stops: allStops });
  } catch (error) {
    console.error('Error in allStopsController:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
