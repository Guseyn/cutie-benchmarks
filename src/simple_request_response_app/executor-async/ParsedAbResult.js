'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class ParsedAbResult extends AsyncObject {

  constructor(result) {
    super(result);
  }

  definedSyncCall() {
    return (result) => {
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
      console.log(set);
      return set;
    }
  }

}

module.exports = ParsedAbResult;
