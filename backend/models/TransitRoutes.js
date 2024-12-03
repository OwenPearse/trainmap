// backend/models/TransitRoute.js
const mongoose = require('mongoose');

const TransitRouteSchema = new mongoose.Schema({
  route_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  route_type: { type: String, required: true }, // e.g., Train, Tram, Bus
  region: { type: String, required: true },
  geometry: {
    type: { type: String, enum: ['LineString'], required: true },
    coordinates: { type: [[Number]], required: true }, // Array of [lng, lat]
  },
  // Add other relevant fields as needed
}, { timestamps: true });

const TransitRoute = mongoose.model('TransitRoute', TransitRouteSchema);
module.exports = TransitRoute;
