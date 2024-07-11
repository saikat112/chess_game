const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const graphqlRoutes = require('./routes/graphqlRoutes');
const startSoapServer = require('./routes/soapServer');
const startGrpcServer = require('./routes/grpcServer');
require('dotenv').config();
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/graphql', graphqlRoutes);

// Updated MongoDB connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb+srv://chess-game:3CNS2WKnki2cTDBn@cluster0.mongodb.net/chess_game?retryWrites=true&w=majority';
console.log(`Connecting to MongoDB at: ${mongoUrl}`);
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected');

  // Handle game-specific events
  socket.on('joinGame', (data) => {
    console.log('Player joined game:', data);
    // Join game logic here
  });

  socket.on('makeMove', (data) => {
    console.log('Move made:', data);
    // Move logic here, broadcast to other clients
    io.emit('moveMade', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start gRPC Server
startGrpcServer(process.env.GRPC_PORT || 50051);

// Start SOAP Server
startSoapServer(app, server);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
