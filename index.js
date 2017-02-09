'use strict';

const Responder = require('./lib/responder');

module.exports = (config) => (new Responder(config)).middleware();
