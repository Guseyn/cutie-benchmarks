'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class WrittenBenchmark extends AsyncObject  {

  constructor(path, json) {
    super(path, json);
  }

  definedAsyncCall() {
    return (path, json, callback) => {
      fs.writeFile(path, Buffer.from(JSON.stringify(json)), callback);
    };
  }

}

module.exports = WrittenBenchmark;
