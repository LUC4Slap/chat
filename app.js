// IMPORTAR AS CONFIGURAÇÕES DO SERVIDOR
let app = require('./config/server');

// PARAMETRIZAR A PORTA DE ESCUTA
app.listen(80, () => {
  console.log('SERVIDOR ON');
});
