// IMPORTAR AS CONFIGURAÇÕES DO SERVIDOR
let app = require('./config/server');

// PARAMETRIZAR A PORTA DE ESCUTA
let server = app.listen(80, () => {
  console.log('SERVIDOR ON');
});

let io = require('socket.io').listen(server);

// CRIAR CONEXÃO POR WEBSOCKET
io.on('connection', socket => {
  console.log('Usuario conectou');

  socket.on('disconnect', () => {
    console.log('Usuario desconectou');
  });
});
