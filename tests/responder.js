'use strict';

let mocha = require('mocha');
let expect = require('chai').expect;

const Responder = require('../lib/responder');

let promish = (cb) => (ctx, next) => new Promise((resolve, reject) => {
  cb();
  resolve();
});

describe('Responder', () => {
  describe('constructor', () => {
    it('should create a new instance', () => {
      let r = new Responder();
      expect(r).instanceOf(Responder);
      expect(r.config).to.be.an('object');
    });
  });

  describe('.middleware', () => {
    it('should return a middleware function', () => {
      let r = new Responder();
      expect(r.middleware()).to.be.a('function');
    });
    it('should accept a context and promise and call the promise', (done) => {
      let r = new Responder();
      let m = r.middleware();
      m({}, promish(done));
    });
    it('should return a promise that resolves on completion', (done) => {
      let r = new Responder();
      let m = r.middleware();
      m({}, promish(()=>{})).then(done).catch(done);
    });
  })
});
