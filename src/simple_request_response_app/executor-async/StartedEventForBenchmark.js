'use strict';

const Event = require('@guseyn/cutie').Event;
const ParsedAbResults = require('./ParsedAbResults');
const WrittenBenchmark = require('./WrittenBenchmark');
const LoggedWrittenBenchmark = require('./LoggedWrittenBenchmark');
const TestedBenchmark = require('./TestedBenchmark');

class StartedEventForBenchmark extends Event {

  constructor(benchmarks) {
    super();
    this.benchmarks = benchmarks;
    this.started = false;
  }

  definedBody(data) {
    if (!this.started) {
      console.log(data.toString('utf8'));
      const abRequests = this.benchmarks.bunchOfAbRequestsForCurrentBenchmark();
      const resultFileName = this.benchmarks.currentBenchmarkResultFileName();
      const curBenchmark = new LoggedWrittenBenchmark(
        new WrittenBenchmark(
          resultFileName, new ParsedAbResults(abRequests)
        )
      );
      if (this.benchmarks.hasNext()) {
        new TestedBenchmark(
          this.benchmarks, curBenchmark
        ).call();
      } else {
        curBenchmark.call();
        // TODO: generate R file
      }
      this.started = true;
    }
  }

}

module.exports = StartedEventForBenchmark;
