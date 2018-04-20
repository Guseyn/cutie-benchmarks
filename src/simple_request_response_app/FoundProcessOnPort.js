'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const find = require('find-process');

class FoundProcessIdOnPort extends AsyncObject {

  constructor(port) {
    super(port);
  }

  definedAsyncCall() {
    return (port, callback) => {
      find('port', port).then((list) => {
        if (list.length) {
          console.log(`%s is listening port ${port}`, list[0].name);
          callback(list[0]);
        } else {
          callback();
        }
      });
    }
  }

}

exports.FoundProcessIdOnPort = FoundProcessIdOnPort;
