'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class GeneratedRFiles extends AsyncObject {

  constructor(readBechmarks) {
    super(readBenchmarks);
  }

  definedSyncCall() {
    return (readBenchmarks) => {
      return readBenchmarks.length;
    }
  }


}