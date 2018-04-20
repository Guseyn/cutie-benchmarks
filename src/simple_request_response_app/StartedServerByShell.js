'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const spawn = require('child_process').spawn;

class StartedServerByShell extends AsyncObject {

  constructor(command, env) {
    super(command, env);
  }

  definedSyncCall() {
    return (command, env) => {
      return spawn('node', [command], { env: env });
    }
  }

}

module.exports = StartedServerByShell;
