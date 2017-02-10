'use strict';

const DEFAULTS = {

}

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
