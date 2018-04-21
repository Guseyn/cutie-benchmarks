'use strict'

const FoundProcessOnPort = require('./executor-async/FoundProcessOnPort');
const KilledProcessOnPort = require('./executor-async/KilledProcessOnPort');
const StartedServerByShell = require('./executor-async/StartedServerByShell');
const EnvWithPort = require('./executor-async/EnvWithPort');
const StartedServerByShellWithDataEvent = require('./executor-async/StartedServerByShellWithDataEvent');
const StartedServerByShellWithErrorEvent = require('./executor-async/StartedServerByShellWithErrorEvent');
const StartedEventForBenchmark = require('./executor-async/StartedEventForBenchmark');
const ErrorEventForBenchmark = require('./executor-async/ErrorEventForBenchmark');
const ParsedAbResult = require('./executor-async/ParsedAbResult');

// TODO: replace with Object Benchmarks
const benchmarks = [
  {
    name: 'cuties',
    command: `./src/simple_request_response_app/cuties/example.js`,
    port: 4200
  }
];
let curBenchmarkNum = 0;
const command = benchmarks[curBenchmarkNum].command;
const port = benchmarks[curBenchmarkNum].port;

new StartedServerByShellWithErrorEvent(
  new StartedServerByShellWithDataEvent(
    new StartedServerByShell(
      new KilledProcessOnPort(
        port, new FoundProcessOnPort(port)
      ), command, new EnvWithPort(port)
    ), new StartedEventForBenchmark(benchmarks, curBenchmarkNum)
  ), new ErrorEventForBenchmark()
).call();
