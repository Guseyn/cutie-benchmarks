'use strict'

const Benchmarks = require('./executor-async/Benchmarks');
const Benchmark = require('./executor-async/Benchmark');
const TestedBenchmark = require('./executor-async/TestedBenchmark');

const benchmarks = new Benchmarks(
  new Benchmark('cuties', './src/simple_request_response_app/cuties/example.js', 4200)
);

new TestedBenchmark(benchmarks).call();
