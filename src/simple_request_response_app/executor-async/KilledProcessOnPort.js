'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class KilledProcessOnPort extends AsyncObject {

  constructor(port, processes) {
    super(port, processes);
  }

  definedSyncCall() {
    return (port, processes) => {
      if (processes.length > 0) {
        process.kill(processes[0].pid, 'SIGHUP');
        console.log(`process with pid: ${processes[0].pid} is killed on port ${port}`);
      } else {
        console.log(`${port} is free`);
      }
    }
    return process;
  }

}

module.exports = KilledProcessOnPort;
