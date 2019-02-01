'use strict'

const { Method } = require('@cuties/rest');

const {
  EndedResponse,
  WrittenResponse,
  ResponseWithWrittenHead
} = require('@cuties/http');
const LoggedMemoryUsage = require('./LoggedMemoryUsage');

class GeneratedResponse extends Method {

  constructor(regexpUrl, type) {
    super(regexpUrl, type);
  }

  invoke(request, response) {
    new LoggedMemoryUsage(
      new EndedResponse(
        new WrittenResponse(
           new ResponseWithWrittenHead(
            response, 200, 'ok',  {
              'Content-Type': 'text/plain' 
            }
          ), `content ... => ${response} `
        ), `is delivered`
      )
    ).call();
  }

}

module.exports = GeneratedResponse;
