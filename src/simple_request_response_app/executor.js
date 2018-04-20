'use strict'

const { exec, spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

const find = require('find-process');

const fixedNParams = [
  {c: 10, n: 1000},
  {c: 20, n: 1000},
  {c: 40, n: 1000},
  {c: 60, n: 1000},
  {c: 80, n: 1000},
  {c: 100, n: 1000},
  {c: 120, n: 1000}
];

const fixedSmallCParams = [
  {c: 10, n: 10},
  {c: 10, n: 100},
  {c: 10, n: 200},
  {c: 10, n: 400},
  {c: 10, n: 600},
  {c: 10, n: 800},
  {c: 10, n: 1000}
];

const fixedMediumCParams = [
  {c: 40, n: 100},
  {c: 40, n: 200},
  {c: 40, n: 400},
  {c: 40, n: 600},
  {c: 40, n: 800},
  {c: 40, n: 1000}
];

const benchmarks = [
  {
    name: 'cuties',
    port: '4200'
  },
  {
    name: 'pure',
    port: '4201'
  },
  {
    name: 'express',
    port: '4202'
  },
  {
    name: 'hapi',
    port: '4203'
  }
]

process.on('SIGHUP', () => {
  console.log('Got SIGHUP signal.');
});

function testBenchmark(testParams, benchmark, endCallback) {
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
        runBenchmarkWithTestParams(testParams, benchmark, 0, endCallback);
      }
    });
    server.stderr.on('data', (data) => {
      console.log(`${benchmark.name} has failed on port: ${benchmark.port} with ${data}`);
    });
  });
}

function runBenchmarkWithTestParams(testParams, benchmark, count, endCallback) {
  if (testParams[count]) {
    runBenchmark(benchmark, testParams[count].c, testParams[count].n, (benchmark, result) => {
      parseAbResult(result);
      count += 1;
      runBenchmarkWithTestParams(testParams, benchmark, count, endCallback);
    });
  } else {
    endCallback();
  }
}

function runBenchmark(benchmark, c, n, callback) {
  exec(`ab -c ${c} -n ${n} http://127.0.0.1:${benchmark.port}/`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    let result = stdout.toString('utf8');
    callback(benchmark, result);
    //console.log(`stderr: ${stderr}`);
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

function parseAbResult(result) {

  let set = {
    // n, c, totalTime, timePerRequest, requestsPerSecond
  }

  const lines = result.split('\n');
  lines.forEach(line => {
    if (line.includes('Concurrency Level')) {
      set.c = line.split(':')[1].trim();
    } else if (line.includes('Complete requests')) {
      set.n = line.split(':')[1].trim();
    } else if (line.includes('Time taken for tests')) {
      set.totalTime = line.split(':')[1].trim().split(' ')[0];
    } else if (line.includes('mean, across all concurrent requests')) {
      set.timePerRequest = line.split(':')[1].trim().split(' ')[0];
    } else if (line.includes('Requests per second')) {
      set.requestsPerSecond = line.split(':')[1].trim().split(' ')[0];
    }
  });
  if (set.c) {
    console.log(set)
  }

}

testBenchmark(testParams, benchmarks[0], () => {
  console.log('ok');
});

