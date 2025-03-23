const crypto = require('crypto');

const PTV_DEV_ID = process.env.PTV_DEV_ID;
const PTV_API_KEY = process.env.PTV_API_KEY;

function buildPtvUrl(endpoint) {
  if (!endpoint.startsWith('/')) {
    endpoint = '/' + endpoint;
  }
  let pathWithDevId =
    endpoint + (endpoint.includes('?') ? '&' : '?') + `devid=${PTV_DEV_ID}`;

  const signature = crypto
    .createHmac('sha1', PTV_API_KEY)
    .update(pathWithDevId)
    .digest('hex')
    .toUpperCase();

  pathWithDevId += `&signature=${signature}`;
  return `https://timetableapi.ptv.vic.gov.au${pathWithDevId}`;
}

module.exports = buildPtvUrl;
