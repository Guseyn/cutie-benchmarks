'use strict';

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const exec = require('child_process').exec;

// Represented result is array of results received by this ab command and the previous ones
class ExecutedAb extends AsyncObject {

  constructor(command, prevComandResults) {
    super(command, prevComandResults);
    this.command = command;
  }

  definedAsyncCall() {
    return (command, prevComandResults, callback) => {
      this.prevComandResults = prevComandResults || [];
      exec(command, callback);
    };
  }

  onResult(stdout, stderr) {
    const result = stdout.toString('utf8');
    this.prevComandResults.push(result);
    console.log(
`-----------------------------------------------------------------------------
      ${this.command} has been executed
-----------------------------------------------------------------------------`);
    console.log(stderr.toString('utf8'));
    return this.prevComandResults;
  }

}

module.exports = ExecutedAb;
