'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const spawn = require('child_process').spawn;

class StartedServerByShellWithErrorEvent extends AsyncObject {

  constructor(server, event) {
    super(server, event);
  }

  definedSyncCall() {
    return (server, event) => {
      server.stderr.on('data', event);
      return server;
    }
  }

}

module.exports = StartedServerByShellWithErrorEvent;
