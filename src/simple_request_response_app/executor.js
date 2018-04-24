'use strict'

const Benchmarks = require('./executor-async/Benchmarks');
const Benchmark = require('./executor-async/Benchmark');
const TestedBenchmark = require('./executor-async/TestedBenchmark');

const fixedNParams = [
  {c: 1, n: 1000}, {c: 5, n: 1000}, {c: 10, n: 1000},
  {c: 15, n: 1000}, {c: 20, n: 1000}, {c: 25, n: 1000},
  {c: 30, n: 1000}, {c: 35, n: 1000}, {c: 40, n: 1000},
  {c: 45, n: 1000}, {c: 50, n: 1000}, {c: 55, n: 1000},
  {c: 60, n: 1000}, {c: 65, n: 1000}, {c: 70, n: 1000},
  {c: 75, n: 1000}
];

const fixedSmallCParams = [
  {c: 10, n: 10}, {c: 10, n: 50}, {c: 10, n: 150},
  {c: 10, n: 200}, {c: 10, n: 250}, {c: 10, n: 300},
  {c: 10, n: 350}, {c: 10, n: 400}, {c: 10, n: 450},
  {c: 10, n: 500}, {c: 10, n: 550}, {c: 10, n: 600},
  {c: 10, n: 650}, {c: 10, n: 700}, {c: 10, n: 750},
  {c: 10, n: 800}, {c: 10, n: 850}, {c: 10, n: 900},
  {c: 10, n: 950}, {c: 10, n: 1000}, {c: 10, n: 1100}
];

const fixedMediumCParams = [
  {c: 50, n: 100}, {c: 50, n: 150}, {c: 50, n: 200},
  {c: 50, n: 250}, {c: 50, n: 300}, {c: 50, n: 350},
  {c: 50, n: 400}, {c: 50, n: 450}, {c: 50, n: 500},
  {c: 50, n: 550}, {c: 50, n: 600}, {c: 50, n: 650},
  {c: 50, n: 700}, {c: 50, n: 750}, {c: 50, n: 800},
  {c: 50, n: 850}, {c: 50, n: 900}, {c: 50, n: 950},
  {c: 50, n: 1000}
]

const benchmarkMaps = [
  {
    filePath: './src/simple_request_response_app/fixed-n-reqs-per-second.R',
    x: 'c',
    y: 'requestsPerSecond',
    benchmarks: [0, 3, 6, 9]
  },
  {
    filePath: './src/simple_request_response_app/fixed-n-time-per-request.R',
    x: 'c',
    y: 'timePerRequest',
    benchmarks: [0, 3, 6, 9]
  },
  {
    filePath: './src/simple_request_response_app/fixed-small-c-reqs-per-second.R',
    x: 'n',
    y: 'requestsPerSecond',
    benchmarks: [1, 4, 7, 10]
  },
  {
    filePath: './src/simple_request_response_app/fixed-small-c-time-per-request.R',
    x: 'n',
    y: 'timePerRequest',
    benchmarks: [1, 4, 7, 10]
  },
  {
    filePath: './src/simple_request_response_app/fixed-medium-c-reqs-per-second.R',
    x: 'n',
    y: 'requestsPerSecond',
    benchmarks: [2, 5, 8, 11]
  },
    {
    filePath: './src/simple_request_response_app/fixed-medium-c-time-per-request.R',
    x: 'n',
    y: 'timePerRequest',
    benchmarks: [2, 5, 8, 11]
  }
]

const benchmarks = new Benchmarks(
  new Benchmark('fixed-n-cuties', './src/simple_request_response_app/cuties/example.js', 8080, fixedNParams),
  new Benchmark('fixed-small-c-cuties', './src/simple_request_response_app/cuties/example.js', 8080, fixedSmallCParams),
  new Benchmark('fixed-medium-c-cuties', './src/simple_request_response_app/cuties/example.js', 8080, fixedMediumCParams),
  new Benchmark('fixed-n-pure', './src/simple_request_response_app/pure/example.js', 8080, fixedNParams),
  new Benchmark('fixed-small-c-pure', './src/simple_request_response_app/pure/example.js', 8080, fixedSmallCParams),
  new Benchmark('fixed-medium-c-pure', './src/simple_request_response_app/pure/example.js', 8080, fixedMediumCParams),
  new Benchmark('fixed-n-express', './src/simple_request_response_app/express/example.js', 8080, fixedNParams),
  new Benchmark('fixed-small-c-express', './src/simple_request_response_app/express/example.js', 8080, fixedSmallCParams),
  new Benchmark('fixed-medium-c-express', './src/simple_request_response_app/express/example.js', 8080, fixedMediumCParams),
  new Benchmark('fixed-n-hapi', './src/simple_request_response_app/hapi/example.js', 8080, fixedNParams),
  new Benchmark('fixed-small-c-hapi', './src/simple_request_response_app/hapi/example.js', 8080, fixedSmallCParams),
  new Benchmark('fixed-medium-c-hapi', './src/simple_request_response_app/hapi/example.js', 8080, fixedMediumCParams)
);

new TestedBenchmark(benchmarks, benchmarkMaps).call();
