const PORT = process.env.PORT || 5000;
const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);

app.use(express.static("src"));

app.listen(PORT, () => console.log("Listening on Port", PORT));

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});
