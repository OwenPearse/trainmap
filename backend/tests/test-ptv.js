// test-ptv.js
require('dotenv').config({path: '../.env'}); // Loads .env variables into process.env
const { fetchFromPTV } = require('../services/ptvService');

async function testPTV() {
  try {
    // Let's test fetching train routes (route_types=0)
    const data = await fetchFromPTV('/v3/routes?route_types=0');
    console.log('Train routes data:', data);
  } catch (error) {
    console.error('Error testing PTV:', error);
  }
}

testPTV();
