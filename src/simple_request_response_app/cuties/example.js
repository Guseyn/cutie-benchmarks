'use strict'

/* 
  Example of simple request-response app on cuties
*/

const {
  Backend, RestApi
} = require('@cuties/rest');

const GeneratedResponse = require('./GeneratedResponse');
const port = process.env.PORT;

new Backend('http', port, '127.0.0.1', 
  new RestApi(
    new GeneratedResponse(new RegExp(/\//), 'GET')
  )
).call();
