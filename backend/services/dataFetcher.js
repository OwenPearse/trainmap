// backend/services/dataFetcher.js
const { fetchFromPTV } = require('./ptvService');

/**
 * Get all routes of a given type (0=train, 1=tram, 2=bus, etc.)
 */
async function getRoutesByType(routeType = 0) {
  const endpoint = `/v3/routes?route_types=${routeType}`;
  return fetchFromPTV(endpoint);
}

/**
 * Example: get stops for a particular route + routeType
 * (Refer to PTV docs for the exact endpoint you want)
 */
async function getStopsForRoute(routeId, routeType) {
  const endpoint = `/v3/stops/route/${routeId}/route_type/${routeType}`;
  return fetchFromPTV(endpoint);
}

// Add more as needed, e.g. next departures, directions, etc.

module.exports = {
  getRoutesByType,
  getStopsForRoute,
};
