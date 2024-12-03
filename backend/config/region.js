// backend/config/regions.js

const regions = [
    {
      name: 'Victoria',
      apiEndpoint: 'https://api.victoria-pt.com/routes', // Replace with actual endpoints when got
      stopsEndpoint: 'https://api.victoria-pt.com/stops',
    },
    {
      name: 'New South Wales',
      apiEndpoint: 'https://api.nsw-pt.com/routes', // Same -> replace
      stopsEndpoint: 'https://api.nsw-pt.com/stops',
    },
    // Add more regions as needed
  ];
  
  module.exports = regions;
  