// backend/jobs/updateRoutesAndStops.js

const cron = require('node-cron');
const { getRoutesByType } = require('../services/dataFetcher');
const Route = require('../models/TransitRoutes'); 

/**
 * Update routes for a given transport type.
 * Adjust or expand this to update stops if needed.
 */
async function updateRoutes() {
  try {
    // Example: Update train routes (routeType = 0)
    const routesData = await getRoutesByType(0);
    if (routesData && routesData.routes) {
      for (const route of routesData.routes) {
        // Upsert each route (update if exists, insert if not)
        await Route.findOneAndUpdate(
          { route_id: route.route_id },
          route,
          { upsert: true, new: true }
        );
      }
      console.log('Routes updated successfully.');
    } else {
      console.log('No routes data received.');
    }
  } catch (error) {
    console.error('Error updating routes:', error);
  }
}

// Schedule the job to run once per day at midnight.
cron.schedule('0 0 * * *', () => {
  console.log('Running daily update for routes and stops...');
  updateRoutes();
});

// Optionally, you can export the update function to run it manually if needed.
module.exports = { updateRoutes };
