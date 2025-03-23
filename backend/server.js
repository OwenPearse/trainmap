// backend/server.js
const http = require('http');
const socketIo = require('socket.io');
const app = require('./app');
const redisClient = require('./config/redis');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 3001;

// Create HTTP server from the Express app
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

// (Optional) Emit real-time data periodically
const emitRealTimeData = () => {
  // Fetch data from Redis or your database and emit updates
  // io.emit('vehicle-update', vehicleLocations);
};
setInterval(emitRealTimeData, 30000); // Every 30 seconds

// Start the server
server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
