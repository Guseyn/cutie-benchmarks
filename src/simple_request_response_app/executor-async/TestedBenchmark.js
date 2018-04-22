'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class TestedBenchmark extends AsyncObject {

  constructor(benchmarks, prevBenchmark) {
    super(benchmarks, prevBenchmark);
  }

  definedSyncCall() {
    return (benchmarks, prevBenchmark) => {
      return benchmarks.runNext();
    }
  }

}

module.exports = TestedBenchmark;
