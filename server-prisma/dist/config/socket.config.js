"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketConnection = void 0;
const socket_io_1 = require("socket.io");
const clients = new Map();
const socketConnection = (httpServer) => {
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
        pingInterval: 25000,
        pingTimeout: 60000,
    });
    io.on("connection", (socket) => {
        console.log("A user connected");
        const clientId = socket.handshake.query.clientId;
        if (clients.has(clientId)) {
            const previousSocket = clients.get(clientId);
            previousSocket.disconnect();
        }
        clients.set(clientId, socket);
        socket.on("disconnect", (reason) => {
            console.log(`A user disconnected due to: ${reason}`);
            clients.delete(clientId);
        });
        socket.on("message", (msg) => {
            console.log("Received message:", msg);
            socket.broadcast.emit("message", msg);
        });
    });
};
exports.socketConnection = socketConnection;
//# sourceMappingURL=socket.config.js.map