  // server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require("dotenv").config();


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes);


// const dbURI = "mongodb+srv://chess-game:3CNS2WKnki2cTDBn@cluster0.nfhftd6.mongodb.net/chess_game?retryWrites=true&w=majority";
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/chessgame';
console.log(`Connecting to MongoDB at: ${mongoUrl}`);
mongoose.connect(mongoUrl, {
  // mongoose.connect(dbURI, {
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
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
