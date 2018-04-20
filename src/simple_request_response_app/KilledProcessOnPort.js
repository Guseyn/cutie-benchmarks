'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class KilledProcessOnPort extends AsyncObject {

  constructor(proc) {
    super(proc);
  }

  definedSyncCall() {
    return (proc) => {
      if (proc) {
        process.kill(proc.pid, 'SIGHUP');
      }
      return proc;
    }
  }

}

module.exports = KilledProcessOnPort;
