// backend/services/aggregateRoutes.js
const { fetchFromPTV } = require('./ptvService');

async function getAllRoutes() {
  const types = [0, 1, 2];
  const routePromises = types.map(type =>
    fetchFromPTV(`/v3/routes?route_types=${type}`)
  );
  const routeResults = await Promise.all(routePromises);
  const allRoutes = routeResults.reduce((acc, data) => {
    if (data.routes) return acc.concat(data.routes);
    return acc;
  }, []);
  return allRoutes;
}

module.exports = { getAllRoutes };
