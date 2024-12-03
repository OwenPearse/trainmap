// backend/controllers/routeController.js
const TransitRoute = require('../models/TransitRoute');

// Fetch all routes with optional filtering
const getAllRoutes = async (req, res) => {
  const { types, regions } = req.query;
  try {
    let query = {};
    if (types) {
      const typeArray = types.split(',').map(type => type.trim());
      query.route_type = { $in: typeArray };
    }
    if (regions) {
      const regionArray = regions.split(',').map(region => region.trim());
      query.region = { $in: regionArray };
    }
    const routes = await TransitRoute.find(query);
    res.json({ routes });
  } catch (error) {
    console.error('Error fetching routes:', error.message);
    res.status(500).json({ error: 'Failed to fetch routes.' });
  }
};

// Add more controller functions as needed (e.g., createRoute, updateRoute, deleteRoute)

module.exports = {
  getAllRoutes,
  // export other functions
};
