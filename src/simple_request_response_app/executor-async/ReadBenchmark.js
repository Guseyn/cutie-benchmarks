'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class ReadBenchmark extends AsyncObject {

  // ReadBenchmark can work on some writtenBenchmark, but it isn't included in readFile logic
  constructor(filePath, writtenBenchmark) {
    super(filePath, 'utf8');
  }

  definedAsyncCall() {
    return fs.readFile;
  }

  onResult(result) {
    return JSON.parse(result);
  }

}

module.exports = ReadBenchmark;
