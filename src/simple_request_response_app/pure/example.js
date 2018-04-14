/* 
  Example of simple request-response app on pure Node
*/

const http = require('http');

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
    
    // time
    const now = process.hrtime();
    const executionTime = [now[0] - startTime[0], now[1] - startTime[1]];
    console.log(`${executionTime[0]}s, ${executionTime[1] * 1e-6} ms`);

    // memory
    const used = process.memoryUsage();
    for (let key in used) {
      console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
  
  });
}).listen(4201, () => {
  console.log('started on 127.0.0.1:4201');
});
