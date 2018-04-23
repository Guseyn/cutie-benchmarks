'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class ReadBenchmark extends AsyncObject {

  constructor(filePath, encoding) {
    super(filePath, encoding || 'utf8');
  }

  definedAsyncCall() {
    return fs.readFile;
  }

  onResult(result) {
    return JSON.parse(result);
  }

}