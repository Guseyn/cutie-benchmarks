'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const ExecutedAb = require('./ExecutedAb');

class ParsedAbResults extends AsyncObject {

  constructor(results) {
    super(results);
  }

  definedSyncCall() {
    return (results) => {
      let allResults = [];
      results.forEach(result => {
        let set = {};
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
        allResults.push(set);
      });
      return allResults;
    }
  }

}

module.exports = ParsedAbResults;
