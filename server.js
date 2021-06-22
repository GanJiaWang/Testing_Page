const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const http = require("http");
const server = http.Serve(app);

app.use(express.static("public"));

app.listen(PORT, () => console.log("Listening on Port", PORT));

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("message", (msg) => {
    io.emit("message", msg);
  });
});
