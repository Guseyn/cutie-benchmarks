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

  constructor(name, command, port, params) {
    this.name = name;
    this.command = command;
    this.port = port;
    this.params = params;
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
    return `./src/simple_request_response_app/${this.name}.json`
  }

}

module.exports = Benchmark;
