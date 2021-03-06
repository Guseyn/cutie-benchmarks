/* 
  Example of simple request-response app on pure Node
*/

const http = require('http');
const port = process.env.PORT;

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  let startTime = process.hrtime();
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body);

    response.on('error', (err) => {
      console.error(err);
    });

    let content = {headers, method, url, body};

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    response.writeHead(
      200, 'ok',  {
        'Content-Type': 'text/plain' 
      }
    );
    response.write('content');
    response.end(` ... is delivered => ${content}`);

    // memory
    const used = process.memoryUsage();
    for (let key in used) {
      console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
  
  });
}).listen(port, () => {
  console.log(`Server running at: ${port}`);
});
