'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const spawn = require('child_process').spawn;

class StartedServerByShellWithDataEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.stdout.on('data', event);
      return server;
    }
  }

}

module.exports = StartedServerByShellWithDataEvent;
