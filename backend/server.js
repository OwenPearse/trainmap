// backend/server.js
const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');
const redisClient = require('./config/redis');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 5000;

// Create HTTP server
const server = http.createServer(app);

// Initialize Socket.io
const io = socketIo(server, {
  cors: {
    origin: '*', // Adjust based on your frontend's origin
    methods: ['GET', 'POST'],
  },
});

// Handle Socket.io connections
io.on('connection', (socket) => {
  logger.info(`New client connected: ${socket.id}`);

  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });
});

// Example: Emit real-time updates (e.g., vehicle locations)
const emitRealTimeData = () => {
  // Fetch data from Redis or directly from the database
  // Example:
  // const vehicleLocations = getVehicleLocations(); // Implement this function
  // io.emit('vehicle-update', vehicleLocations);
};

// Set interval to emit real-time data every X seconds
setInterval(emitRealTimeData, 30000); // Every 30 seconds

// Start Server
server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
