'use strict'

const { exec, spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const find = require('find-process');

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

function findBenchmarkByPort(port) {
  return benchmarks.filter(benchmark => {
    return benchmark.port === port;
  })[0];
}

const c = 100;
const n = 10000;
const nPerC = Math.floor(n / c);

function sendConcurrentRequest(port, curC, curN, callback) {
  http.get(`http://127.0.0.1:${port}`, (res) => {
    curN += 1; 
    if (curN < nPerC) {
      sendConcurrentRequest(port, curC, curN, callback);
    } else if (curN === nPerC) {
      //console.log(`${curN} requests have been processed on port ${port} for user ${curC}`);
      callback();
    }
  });
}

function loadTest(port, callback) {
  let count = 0;
  let startTime = new Date().getTime();
  for (let i = 0; i < c; i++) {
    sendConcurrentRequest(port, i, 0, () => {
      count += 1;
      if (count === c) {
        const now = new Date().getTime();
        const executionTime = now - startTime;
        findBenchmarkByPort(port).result.totalTime = executionTime;
        console.log(`port: ${port}, time: ${executionTime} msec`);
        callback();
      }
    });
  }
}

function displayResults() {

}

let startedCount = 0;

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

// free ports
benchmarks.forEach((benchmark) => {
  find('port', benchmark.port).then((list) => {
    if (list.length) {
      console.log(`%s is listening port ${benchmark.port}`, list[0].name);
      process.kill(list[0].pid, 'SIGHUP');
    }
  });
});

// start
benchmarks.forEach((benchmark, index) => {

  benchmark.command.stdout.on('data', (data) => {
    if (startedCount < benchmarks.length) {
      console.log(`${benchmark.name} has started on port: ${benchmark.port}`);
    }
    startedCount += 1;
    if (startedCount == benchmarks.length) {
      console.log('servers are ready');

      loadTest('4203', () => {
        loadTest('4201', () => {
          loadTest('4202', () => {
            loadTest('4200', () => {});
          });
        });
      });

    }
  });

  benchmark.command.stderr.on('data', (data) => {
    console.log(`${benchmark.name} has failed on port: ${benchmark.port} with ${data}`);
  });

});

