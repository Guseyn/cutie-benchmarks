'use strict'

const Benchmarks = require('./executor-async/Benchmarks');
const Benchmark = require('./executor-async/Benchmark');
const TestedBenchmark = require('./executor-async/TestedBenchmark');

const benchmarks = new Benchmarks(
  new Benchmark('cuties', './src/simple_request_response_app/cuties/example.js', 8080),
  new Benchmark('pure', './src/simple_request_response_app/pure/example.js', 8080),
  new Benchmark('express', './src/simple_request_response_app/express/example.js', 8080),
  new Benchmark('hapi', './src/simple_request_response_app/hapi/example.js', 8080)
);

new TestedBenchmark(benchmarks).call();
