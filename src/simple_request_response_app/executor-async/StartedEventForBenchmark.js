'use strict';

const Event = require('@guseyn/cutie').Event;
const ParsedAbResults = require('./ParsedAbResults');
const WrittenBenchmark = require('./WrittenBenchmark');
const LoggedWrittenBenchmark = require('./LoggedWrittenBenchmark');
const TestedBenchmark = require('./TestedBenchmark');
const ReadBenchmark = require('./ReadBenchmark');
const ReadBenchmarks = require('./ReadBenchmarks');
const GeneratedRFiles = require('./GeneratedRFiles');

class StartedEventForBenchmark extends Event {

  constructor(benchmarks, benchmarkMaps) {
    super();
    this.benchmarks = benchmarks;
    this.benchmarkMaps = benchmarkMaps;
    this.started = false;
  }

  definedBody(data) {
    if (!this.started) {
      console.log(data.toString('utf8'));
      const abRequests = this.benchmarks.bunchOfAbRequestsForCurrentBenchmark();
      const resultFileName = this.benchmarks.currentBenchmarkResultFileName();
      const curBenchmark = new LoggedWrittenBenchmark(
        resultFileName, new WrittenBenchmark(
          resultFileName, new ParsedAbResults(abRequests)
        )
      );
      if (this.benchmarks.hasNext()) {
        this.testNextBenchmark(curBenchmark)
      } else {
        this.generateRFileOnLastTestedBenchmark(curBenchmark);
      }
      this.started = true;
    }
  }

  testNextBenchmark(curBenchmark) {
    new TestedBenchmark(
      this.benchmarks, this.benchmarkMaps, curBenchmark
    ).call();
  }

  generateRFileOnLastTestedBenchmark(curBenchmark) {
    const filePaths = this.benchmarks.allFilePaths();
    const readFiles = [];
    filePaths.forEach((filePath, index) => {
      if (index !== filePaths.length - 1) {
        readFiles.push(new ReadBenchmark(filePath));
      } else {
        readFiles.push(new ReadBenchmark(filePath, curBenchmark));
      }
    });
    new GeneratedRFiles(
      new ReadBenchmarks(...readFiles), this.benchmarkMaps
    ).call();
  }

}

module.exports = StartedEventForBenchmark;
