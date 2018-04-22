'use strict'

const FoundProcessOnPort = require('./FoundProcessOnPort');
const KilledProcessOnPort = require('./KilledProcessOnPort');
const StartedServerByShell = require('./StartedServerByShell');
const EnvWithPort = require('./EnvWithPort');
const StartedServerByShellWithDataEvent = require('./StartedServerByShellWithDataEvent');
const StartedServerByShellWithErrorEvent = require('./StartedServerByShellWithErrorEvent');
const StartedEventForBenchmark = require('./StartedEventForBenchmark');
const ErrorEventForBenchmark = require('./ErrorEventForBenchmark');
const ExecutedAb = require('./ExecutedAb');

class Benchmark {

  constructor(name, command, port) {
    this.name = name;
    this.command = command;
    this.port = port;
    this.params = [
      {c: 1, n: 1000},
      {c: 5, n: 1000},
      {c: 10, n: 1000},
      {c: 15, n: 1000},
      {c: 20, n: 1000},
      {c: 25, n: 1000},
      {c: 30, n: 1000},
      {c: 35, n: 1000},
      {c: 40, n: 1000},
      {c: 45, n: 1000},
      {c: 50, n: 1000},
      {c: 55, n: 1000},
      {c: 60, n: 1000},
      {c: 65, n: 1000},
      {c: 70, n: 1000},
      {c: 75, n: 1000},
      {c: 80, n: 1000},
      {c: 85, n: 1000},
      {c: 90, n: 1000},
      {c: 95, n: 1000},
      {c: 100, n: 1000},

      {c: 10, n: 10},
      {c: 10, n: 50},
      {c: 10, n: 150},
      {c: 10, n: 200},
      {c: 10, n: 250},
      {c: 10, n: 300},
      {c: 10, n: 350},
      {c: 10, n: 400},
      {c: 10, n: 450},
      {c: 10, n: 500},
      {c: 10, n: 550},
      {c: 10, n: 600},
      {c: 10, n: 650},
      {c: 10, n: 700},
      {c: 10, n: 750},
      {c: 10, n: 800},
      {c: 10, n: 850},
      {c: 10, n: 900},
      {c: 10, n: 950},
      {c: 10, n: 1000},
      {c: 10, n: 1100},
      {c: 10, n: 1200},
      {c: 10, n: 1300},
      {c: 10, n: 1400},
      {c: 10, n: 1500},

      {c: 50, n: 100},
      {c: 50, n: 150},
      {c: 50, n: 200},
      {c: 50, n: 250},
      {c: 50, n: 300},
      {c: 50, n: 350},
      {c: 50, n: 400},
      {c: 50, n: 450},
      {c: 50, n: 500},
      {c: 50, n: 550},
      {c: 50, n: 600},
      {c: 50, n: 650},
      {c: 50, n: 700},
      {c: 50, n: 750},
      {c: 50, n: 800},
      {c: 50, n: 850},
      {c: 50, n: 900},
      {c: 50, n: 950},
      {c: 50, n: 1000}
    ]
  }

  run(benchmarks) {
    new StartedServerByShellWithErrorEvent(
      new StartedServerByShellWithDataEvent(
        new StartedServerByShell(
          new KilledProcessOnPort(
            this.port, new FoundProcessOnPort(this.port)
          ), this.command, new EnvWithPort(this.port)
        ), new StartedEventForBenchmark(benchmarks)
      ), new ErrorEventForBenchmark()
    ).call();
  }

  bunchOfAbRequests() {
    let requests;
    this.params.forEach(param => {
      requests = new ExecutedAb(
        `ab -c ${param.c} -n ${param.n} http://127.0.0.1:${this.port}/`, requests
      );
    });
    return requests;
  }

  resultFileName() {
    return `./src/simple_request_response_app/${this.name}.txt`
  }

}

module.exports = Benchmark;
