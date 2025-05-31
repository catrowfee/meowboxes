import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = join(dirname(fileURLToPath(import.meta.url)),'..');

const msgStruct = {
  'u': 0x0000, // message sender id
  'i': 0x0000, // message id
  'm': 'yo', // message content
  't': 0 // unix timestamp
};

//// production version (dont forget to move files to src/)
// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'src/index.html'));
// }); app.get('/style', (req, res) => {
//   res.sendFile(join(__dirname, 'src/index.css'));
// }); app.get('/script', (req, res) => {
//   res.sendFile(join(__dirname, 'src/index.js'));
// }); app.get('/client', (req, res) => {
//  res.sendFile(join(__dirname, 'scripts/client.js'));
// });

// testing vite-express compatible version
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
}); app.get('/index.css', (req, res) => {
  res.sendFile(join(__dirname, 'index.css'));
}); app.get('/index.js', (req, res) => {
  res.sendFile(join(__dirname, 'index.js'));
}); app.get('/client.js', (req, res) => {
  res.sendFile(join(__dirname, 'scripts/client.js'))
})

app.get('/testing.js', (req, res) => {
  res.sendFile(join(__dirname, 'scripts/testging.js'));
})

io.on('connection', (sock) => {
  console.log('a user helo\'d');

  sock.on('chat general', (msg) => {
    console.log(`msg:    ${msg.u}\t(#${msg.i})\n\t${msg.m}`);
    io.emit('chat general', msg);
  });

  sock.on('disconnect', () => {
    console.log('a user ciao\'d');
  });
});

server.listen(8013, () => {
  console.log('code is load at http://localhost:8013');
});