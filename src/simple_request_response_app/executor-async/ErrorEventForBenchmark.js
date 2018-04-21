'use strict';

const Event = require('@guseyn/cutie').Event;

class ErrorEventForBenchmark extends Event {

  constructor() {
    super();
  }

  definedBody(data) {
    console.log(data);
  }

}

module.exports = ErrorEventForBenchmark;
