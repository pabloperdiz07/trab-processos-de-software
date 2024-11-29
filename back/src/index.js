require('dotenv').config();
require('./mongo.service');

const { start } = require('./server');

const init = async () => {
  // Inicializando servidor
  const server = await start();
  console.log('Server running on %s', server.info.uri);
  console.log('Allowed CORS origin: todas');
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
