// backend/utils/errorHandler.js
const logger = require('./logger');

const errorHandler = (err, req, res, next) => {
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
};

module.exports = errorHandler;
