'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const find = require('find-process');
const promiseToCallback = require('promise-to-callback');

class FoundProcessOnPort extends AsyncObject {

  constructor(port) {
    super(port);
  }

  definedAsyncCall() {
    return (port, callback) => {
      promiseToCallback(find('port', port))(callback);
    }
  }

}

module.exports = FoundProcessOnPort;
