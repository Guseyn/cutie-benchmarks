'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class LoggedExecutionTime extends AsyncObject {

  constructor(startTime, asyncObject) {
    super(startTime, asyncObject);
  }

  definedSyncCall() {
    return (startTime, asyncObject) => {
      let now = process.hrtime();
      let executionTime = [now[0] - startTime[0], now[1] - startTime[1]];
      console.log(`${executionTime[0]}s, ${executionTime[1]} ns or ${executionTime[1] * 1e-6} ms`);
      return executionTime;
    }
  }

}

module.exports = LoggedExecutionTime;
