const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
  port: process.env.PORT,
  host: process.env.HOST,
  routes: {
    cors: {
      origin: ['*'],
      credentials: true
    }
  }
});

const start = async () => {
  server.route(routes);
  await server.start();
  return server;
};

const init = async () => {
  server.route(routes);
  await server.initialize();
  return server;
};

module.exports = {
  start,
  init,
};
