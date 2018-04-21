'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class EnvWithPort extends AsyncObject {

  constructor(port) {
    super(port);
  }

  definedSyncCall() {
    return (port) => {
      const env = Object.create(process.env);
      env.PORT = port;
      return env;
    }
  }

}

module.exports = EnvWithPort;
