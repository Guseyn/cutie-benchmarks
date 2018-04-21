'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const exec = require('child_process').exec;

class ExecutedAb extends AsyncObject {

  constructor(command) {
    super(command);
  }

  definedAsyncCall() {
    return exec;
  }

  onResult(stdout, stderr) {
    console.log(stderr.toString('utf8'));
    return stdout.toString('utf8');
  }

}

module.exports = ExecutedAb;
