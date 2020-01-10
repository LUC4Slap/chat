// IMPORTAR AS CONFIGURAÇÕES DO SERVIDOR
let app = require('./config/server');

// PARAMETRIZAR A PORTA DE ESCUTA
let server = app.listen(80, () => {
  console.log('SERVIDOR ON');
});

require('socket.io').listen(server);
