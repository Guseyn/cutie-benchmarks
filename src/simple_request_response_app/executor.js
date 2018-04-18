'use strict'

const { exec, spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const find = require('find-process');

// For ab
const c = process.env.c;
const n = process.env.n;

const benchmarks = [
  {
    name: 'cuties',
    port: '4200',
    result: {}
  },
  {
    name: 'pure',
    port: '4201',
    result: {}
  },
  {
    name: 'express',
    port: '4202',
    result: {}
  },
  {
    name: 'hapi',
    port: '4203',
    result: {}
  }
]

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

function runBenchmark(benchmark) {
  killProcessOnPort(benchmark.port, () => {
    const server = spawn(
      'node', [`./src/simple_request_response_app/${benchmark.name}/example.js`], {
        env: portForSpawn(benchmark.name)
      }
    );
    let started = false;
    server.stdout.on('data', (data) => {
      if (!started) {
        console.log(`${benchmark.name} has started on port: ${benchmark.port}`);
        started = true;

        const ab = spawn('ab', ['-c', c, '-n', n, `http://127.0.0.1:${benchmark.port}/`]);
        ab.stdout.on('data', (data) => {
          console.log(data.toString('utf8'));
        });
        ab.stderr.on('data', (data) => {
          console.log(data.toString('utf8'));
        });
      }
    });
    server.stderr.on('data', (data) => {
      console.log(`${benchmark.name} has failed on port: ${benchmark.port} with ${data}`);
    });
  });
}

function portForSpawn(spawnName) {
  const env = Object.create(process.env);
  env.PORT = findBenchmarkByName(spawnName).port;
  return env;
}

function findBenchmarkByPort(port) {
  return benchmarks.filter(benchmark => {
    return benchmark.port === port;
  })[0];
}

function findBenchmarkByName(name) {
  return benchmarks.filter(benchmark => {
    return benchmark.name === name;
  })[0];
}

function killProcessOnPort(port, callback) {
  find('port', port).then((list) => {
    if (list.length) {
      console.log(`%s is listening port ${port}`, list[0].name);
      process.kill(list[0].pid, 'SIGHUP');
    }
    callback();
  });
}

runBenchmark(benchmarks[0]);
