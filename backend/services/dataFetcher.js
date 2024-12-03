// backend/services/dataFetcher.js
const axios = require('axios');
const cron = require('node-cron');
const regions = require('../config/regions');
const TransitRoute = require('../models/TransitRoute');
const Stop = require('../models/Stop');
const { fetchPTVData } = require('./ptvService');
const dotenv = require('dotenv');

dotenv.config();

// Function to compare two objects
const isEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

// Fetch and update transit routes
const fetchAndUpdateRoutes = async () => {
  for (const region of regions) {
    try {
      const data = await fetchPTVData('/routes', { region: region.name }); // Adjust params as needed
      const routes = data.routes; // Adjust based on actual API response

      for (const route of routes) {
        const existingRoute = await TransitRoute.findOne({ route_id: route.route_id });
        if (existingRoute) {
          if (!isEqual(existingRoute.toObject(), route)) {
            await TransitRoute.updateOne({ route_id: route.route_id }, route);
            console.log(`Updated route: ${route.name}`);
          }
        } else {
          await TransitRoute.create(route);
          console.log(`Added new route: ${route.name}`);
        }
      }
    } catch (error) {
      console.error(`Error fetching routes for ${region.name}:`, error.message);
    }
  }
};

// Fetch and update stops
const fetchAndUpdateStops = async () => {
  for (const region of regions) {
    try {
      const data = await fetchPTVData('/stops', { region: region.name }); // Adjust params as needed
      const stops = data.stops; // Adjust based on actual API response

      for (const stop of stops) {
        const existingStop = await Stop.findOne({ stop_id: stop.stop_id });
        if (existingStop) {
          if (!isEqual(existingStop.toObject(), stop)) {
            await Stop.updateOne({ stop_id: stop.stop_id }, stop);
            console.log(`Updated stop: ${stop.name}`);
          }
        } else {
          await Stop.create(stop);
          console.log(`Added new stop: ${stop.name}`);
        }
      }
    } catch (error) {
      console.error(`Error fetching stops for ${region.name}:`, error.message);
    }
  }
};

// Schedule data fetching once every 24 hours
cron.schedule('0 0 * * *', () => { // Runs every day at midnight UTC
  console.log('Starting scheduled data fetch...');
  fetchAndUpdateRoutes();
  fetchAndUpdateStops();
});
