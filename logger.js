//USO DE EVENTS
const EventEmitter = require("events");
//FS PARA SALVAR NO ARQ.
const fs = require("fs");
//PATH PARA SALVAR O CAMINHO CORRETO DE LOG
const path = require("path");

const emitter = new EventEmitter();

emitter.on("log", (message) => {
  fs.appendFile(path.join(__dirname, "log.txt"), message, (err) => {
    if (err) throw err;
  });
});

function log(message) {
  emitter.emit("log", message);
}

module.exports = log;
