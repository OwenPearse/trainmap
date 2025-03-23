const fetch = require('node-fetch');
const buildPtvUrl = require('./ptvSignature');

async function fetchFromPTV(endpoint) {
  try {
    const url = buildPtvUrl(endpoint);
    console.log('Fetching from PTV URL:', url);
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

module.exports = { fetchFromPTV };
