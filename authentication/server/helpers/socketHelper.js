import { Server as SocketIOServer } from 'socket.io';

let io;
const connectedUsers = {}; // Object to store connected users

const initSocketIO = (server) => {
  io = new SocketIOServer(server, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    console.log('a user connected');

    // When a user authenticates, store their socket ID
    socket.on('authenticate', (userId) => {
        connectedUsers[userId] = socket.id;
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('user disconnected');
      // Remove user from connectedUsers object
      for (const [userId, socketId] of Object.entries(connectedUsers)) {
        if (socketId === socket.id) {
          delete connectedUsers[userId];
          break;
        }
      }
    });
  });
};

const sendNotificationToUser = (userId, message) => {
  const socketId = connectedUsers[userId];
  if (socketId) {
    io.to(socketId).emit('notification', message);
  } else {
    console.error(`User with ID ${userId} is not connected`);
  }
};

export { initSocketIO, sendNotificationToUser };
