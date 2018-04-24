'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class GeneratedRFiles extends AsyncObject {

  constructor(readBenchmarks, benchmarkMaps) {
    super(readBenchmarks, benchmarkMaps);
  }

  definedSyncCall() {
    return (readBenchmarks, benchmarkMaps) => {
      benchmarkMaps.forEach(map => {
        let RScript = '';
        map.benchmarks.forEach((benchmarkNum, index) => {
          let x = `x${index}<-c(`;
          let y = `y${index}<-c(`;
          readBenchmarks[benchmarkNum].forEach((result, index) => {
            x += result[map['x']] + ((index !== readBenchmarks[benchmarkNum].length - 1) ? ',' : '');
            y += result[map['y']] + ((index !== readBenchmarks[benchmarkNum].length - 1) ? ',' : '');
          });
          x += ');';
          y += ');';
          RScript += `${x}\n${y}\nplot(x${index}, y${index}, type='n', xlab="${map['x']}", ylab="${map['y']}");\nlines(x${index}, y${index}, type='l', xlab="${map['x']}", ylab="${map['y']}");`;
        });
        RScript += 'grid();\n';
        map.script = RScript;
        // TODO: replace with declarative abstraction
        fs.writeFileSync(map.filePath, map.script);
        console.log(`${map.filePath} has been written`);
      });
      return benchmarkMaps;
    }
  }

}

module.exports = GeneratedRFiles;
