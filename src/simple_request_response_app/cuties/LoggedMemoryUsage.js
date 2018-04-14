'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class LoggedMemoryUsage extends AsyncObject {

  constructor(app) {
    super(app);
  }

  definedSyncCall() {
    return (app) => {
      const used = process.memoryUsage();
      for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
      }
      return app;
    }
  }

}

module.exports = LoggedMemoryUsage;
