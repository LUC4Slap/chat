// IMPORTAR AS CONFIGURAÇÕES DO SERVIDOR
let app = require('./config/server');

// PARAMETRIZAR A PORTA DE ESCUTA
let server = app.listen(80, () => {
  console.log('SERVIDOR ON');
});

let io = require('socket.io').listen(server);

app.set('io', io);

// CRIAR CONEXÃO POR WEBSOCKET
io.on('connection', socket => {
  console.log(`Usuario conectou: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`Usuario desconectou: ${socket.id}`);
  });

  socket.on('msgParaServidor', data => {
    socket.emit('msgParaCliente', {
      apelido: data.apelido,
      mensagem: data.mensagem,
    });

    socket.broadcast.emit('msgParaCliente', {
      apelido: data.apelido,
      mensagem: data.mensagem,
    });
  });
});
