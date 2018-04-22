/* 
  Example of simple request-response app on express framework
*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 
const port = process.env.PORT;

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {

  const { headers, method, url } = req;
  const body = req.body;
  const content = {headers, method, url, body};
  res.status(200).send(`content is delivered => ${content}`);

  // memory
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }
});
 
app.listen(port);
console.log(`Server running at: ${port}`);
