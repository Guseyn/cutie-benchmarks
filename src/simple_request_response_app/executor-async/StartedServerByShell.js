'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const spawn = require('child_process').spawn;

class StartedServerByShell extends AsyncObject {

  constructor(proc, command, env) {
    super(proc, command, env);
  }

  definedSyncCall() {
    return (proc, command, env) => {
      return spawn('node', [command], { env: env });
    }
  }

}

module.exports = StartedServerByShell;
