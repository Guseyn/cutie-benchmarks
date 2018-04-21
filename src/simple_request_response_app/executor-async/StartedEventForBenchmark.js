'use strict';

const Event = require('@guseyn/cutie').Event;
const ExecutedAb = require('./ExecutedAb');
const ParsedAbResult = require('./ParsedAbResult');

class StartedEventForBenchmark extends Event {

  constructor(benchmarks, curBenchmarkNum) {
    super();
    this.started = false;
    this.benchmarks = benchmarks;
    this.curBenchmarkNum = curBenchmarkNum;
  }

  definedBody(data) {
    if (!this.started) {
      console.log(data.toString('utf8'));
      if (this.benchmarks[this.curBenchmarkNum]) {
        new ParsedAbResult(
          new ExecutedAb(`ab -c 10 -n 100 http://127.0.0.1:${this.benchmarks[this.curBenchmarkNum].port}/`)
        ).call();
      } else {
        // start new benchmark with incremented curBenchmarkNum
      }
      this.started = true;
    }
  }

}

module.exports = StartedEventForBenchmark;
