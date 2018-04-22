'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class LoggedWrittenBenchmark extends AsyncObject  {

  constructor(path, benchmark) {
    super(path, benchmark);
  }

  definedAsyncCall() {
    return (path, benchmark) => {
      console.log(`file with path ${path} has been written successfully`);
    };
  }

}

module.exports = LoggedWrittenBenchmark;
