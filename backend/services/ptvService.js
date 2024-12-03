// backend/services/ptvService.js
const axios = require('axios');
const calculateSignature = require('../utils/ptvSignature'); // You'll need to create this utility
const dotenv = require('dotenv');

dotenv.config();

const PTV_DEVID = process.env.PTV_DEVID;
const PTV_KEY = process.env.PTV_KEY;
const PTV_BASE_URL = process.env.PTV_BASE_URL;

// Function to fetch data from PTV API
const fetchPTVData = async (endpoint, params = {}) => {
  let requestPath = `${endpoint}`;
  const queryParams = new URLSearchParams(params);
  if (queryParams.toString()) {
    requestPath += `?${queryParams.toString()}`;
  }
  requestPath += `${queryParams.toString() ? '&' : '?'}devid=${PTV_DEVID}`;
  const signature = calculateSignature(requestPath, PTV_KEY);
  requestPath += `&signature=${signature}`;
  const url = `${PTV_BASE_URL}${requestPath}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching PTV data:', error.response ? error.response.data : error.message);
    throw error;
  }
};

module.exports = { fetchPTVData };
