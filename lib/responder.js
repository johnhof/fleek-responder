'use strict';

class Responder {
  constructor (config={}) {
    this.config = config;

  }

  middleware () {
    return (ctx, next) => {
      return next();
    }
  }
}

module.exports = Responder;
