// backend/services/ptvService.js
const fetch = require('node-fetch');
const buildPtvUrl = require('./ptvSignature');

/**
 * Generic helper to fetch JSON from PTV endpoints.
 * @param {string} endpoint - e.g. '/v3/routes?route_types=0'
 * @returns {Promise<Object>} JSON response from PTV
 */
async function fetchFromPTV(endpoint) {
  try {
    const url = buildPtvUrl(endpoint);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`PTV fetch failed: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching from PTV:', error);
    throw error;
  }
}

module.exports = {
  fetchFromPTV,
};
