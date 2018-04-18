/* 
  Example of simple request-response app on hapi framework
*/

'use strict';

const Hapi = require('hapi');
const port = process.env.PORT;

const server = Hapi.server({
    port: port,
    host: 'localhost'
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const { headers, method, url } = request;
      const content = {headers, method, url};

      // memory
      const used = process.memoryUsage();
      for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
      }
      return `content is delivered => ${content}`;
    }
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
