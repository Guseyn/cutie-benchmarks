'use strict'

const { exec, spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const runCutiesExample = spawn('node', ['./src/simple_request_response_app/cuties/example.js']);
const runPureExample = spawn('node', ['./src/simple_request_response_app/pure/example.js']);
const runExpressExample = spawn('node', ['./src/simple_request_response_app/express/example.js']);
const runHapiExample = spawn('node', ['./src/simple_request_response_app/hapi/example.js']);

const benchmarks = [
  {
    name: 'cuties',
    port: '4200',
    command: runCutiesExample,
    result: {}
  },
  {
    name: 'pure',
    port: '4201',
    command: runPureExample,
    result: {}
  },
  {
    name: 'express',
    port: '4202',
    command: runExpressExample,
    result: {}
  },
  {
    name: 'hapi',
    port: '4203',
    command: runHapiExample,
    result: {}
  }
]

const c = 10;
const n = 100;
const nPerC = Math.floor(n / c);

function sendConcurrentRequest(port, curN, callback) {
  http.get(`http://127.0.0.1:${port}`, (res) => {
    console.log(res);
    curN += 1; 
    if (curN < nPerC) {
      sendConcurrentRequest(port, curN, callback);
    } else if (curN === nPerC) {
      callback();
    }
  });
}

function loadTest(port) {
  let count = 0;
  let startTime = process.hrtime();
  for (let i = 0; i < c; i++) {
    sendConcurrentRequest(port, 0, () => {
      count += 1;
      if (count === c) {
        const now = process.hrtime();
        const executionTime = [now[0] - startTime[0], now[1] - startTime[1]];
        console.log(`${executionTime[0]}s, ${executionTime[1] * 1e-6} ms`);
      }
    });
  }
}

let startedCount = 0;

benchmarks.forEach((benchmark, index) => {

  benchmark.command.stdout.on('data', (data) => {
    console.log(`${benchmark.name} has started on port: ${benchmark.port}`);
    startedCount += 1;
    if (startedCount == benchmarks.length) {
      loadTest('4200');
    }
  });

});

