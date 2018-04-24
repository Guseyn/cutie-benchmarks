'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class GeneratedRFiles extends AsyncObject {

  constructor(readBenchmarks, benchmarkMaps) {
    super(readBenchmarks, benchmarkMaps);
  }

  definedSyncCall() {
    let RScripts = [];
    return (readBenchmarks, benchmarkMaps) => {
      benchmarkMaps.forEach(map => {
        let RScript = '';
        map.benchmarks.forEach((benchmarkNum, index) => {
          let x = `x${index}<-(`;
          let y = `y${index}<-(`;
          readBenchmarks[benchmarkNum].forEach((result, index) => {
            x += result[map['x']] + ((index !== readBenchmarks[benchmarkNum].length - 1) ? ',' : '');
            y += result[map['y']] + ((index !== readBenchmarks[benchmarkNum].length - 1) ? ',' : '');
          });
          x += ');';
          y += ');';
          RScript +=`${x}\n${y}\n`;
        });
        // TODO: end scripts and write them to R files
        //console.log(RScript);
      });
    }
  }

}

module.exports = GeneratedRFiles;
