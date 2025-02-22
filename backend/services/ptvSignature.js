// backend/services/ptvSignature.js
const crypto = require('crypto');

/**
 * Builds a fully signed PTV URL given a relative endpoint like '/v3/routes?route_types=0'.
 * @param {string} endpoint - e.g. '/v3/routes?route_types=0'
 * @returns {string} full signed URL
 */
function buildPtvUrl(endpoint) {
  // Ensure endpoint starts with '/'
  if (!endpoint.startsWith('/')) {
    endpoint = '/' + endpoint;
  }

  // 1) Append devid
  let pathWithDevId =
    endpoint + (endpoint.includes('?') ? '&' : '?') + `devid=${PTV_DEV_ID}`;

  // 2) Create signature
  const signature = crypto
    .createHmac('sha1', PTV_API_KEY)
    .update(pathWithDevId)
    .digest('hex')
    .toUpperCase();

  // 3) Append signature
  pathWithDevId += `&signature=${signature}`;

  // 4) Prepend base URL
  return `https://timetableapi.ptv.vic.gov.au${pathWithDevId}`;
}

module.exports = buildPtvUrl;
