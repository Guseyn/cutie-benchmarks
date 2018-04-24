'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class TestedBenchmark extends AsyncObject {

  constructor(benchmarks, benchmarkMaps, prevBenchmark) {
    super(benchmarks, benchmarkMaps, prevBenchmark);
  }

  definedSyncCall() {
    return (benchmarks, benchmarkMaps, prevBenchmark) => {
      return benchmarks.runNext(benchmarkMaps);
    }
  }

}

module.exports = TestedBenchmark;
