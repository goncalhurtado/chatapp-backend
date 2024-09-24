const socketIO = require("socket.io");

const initializeSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    socket.on("join", (username) => {
      console.log(`User connected: ${username}`);
      socket.username = username;
    });

    socket.on("chat_message", (data) => {
      const { username, message } = data;
      console.log(`Message received from ${username}: ${message}`);

      // Enviar el mensaje a todos los clientes
      io.emit("chat_message", {
        username: socket.username,
        message,
      });
    });

    // Manejar la desconexión
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.username || socket.id}`);
    });
  });

  return io;
};

module.exports = initializeSocket;

// const io = require("socket.io")(server, {
//     cors: {
//       origin: "*",
//     },
//   });

//   io.on("connection", (socket) => {
//     console.log("Conected to socket.io");
//   });
