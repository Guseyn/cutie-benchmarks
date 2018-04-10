'use strict'

/* 
  Example of simple request-response app on cuties
*/

const {
  Backend, RestApi
} = require('@guseyn/cutie-rest');

const GeneratedResponse = require('./GeneratedResponse');

new Backend(4200, '127.0.0.1').runWithApi(
  new RestApi(
    new GeneratedResponse(new RegExp(/\//), 'GET')
  )
);
