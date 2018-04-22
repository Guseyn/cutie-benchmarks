'use strict'

class Benchmarks {

  constructor(...benchmarks) {
    this.benchmarks = benchmarks;
    this.currentNum = 0;
  }

  runNext() {
    const curNum = this.currentNum;
    this.benchmarks[curNum].run(this);
    return this.benchmarks[curNum];
  }

  currentBenchmarkResultFileName() {
    return this.benchmarks[this.currentNum].resultFileName();
  }

  bunchOfAbRequestsForCurrentBenchmark() {
    return this.benchmarks[this.currentNum].bunchOfAbRequests();
  }

  hasNext() {
    this.currentNum += 1;
    return this.benchmarks[this.currentNum] != undefined;
  }

}

module.exports = Benchmarks;
