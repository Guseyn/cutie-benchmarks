'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class ReadBenchmarks extends AsyncObject {

  constructor(...readFiles) {
    super(...readFiles);
  }

  definedSyncCall() {
    return (...readFiles) => {
      return readFiles;
    }
  }

}

module.exports = ReadBenchmarks;
