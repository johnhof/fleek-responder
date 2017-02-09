# Fleek Responder

[![Build Status](https://travis-ci.org/fleekjs/fleek-responder.svg?branch=master)](https://travis-ci.org/fleekjs/fleek-responder)

Middleware for routing to controllers using [swagger](http://swagger.io/specification/) schema's.

Requirements:
- Node >= 6.0.0
- [fleek-context](https://github.com/fleekjs/fleek-context)

# Usage

This package is to be used as middleware for [Koa2](https://github.com/koajs/koa/tree/v2.x) to bind responses for swagger documentation using `ctx.fleek.context` defined by [fleek-context](https://github.com/fleekjs/fleek-context) or an equivalent custom middleware.

```
npm install --save fleek-responder
```

# Examples

For a swagger example, refer to the test [swagger json](https://github.com/fleekjs/fleek-responder/blob/master/tests/swagger.json)

```javascript
const Koa = require('koa');
const fleekCtx = require('fleek-context');Â
const fleekResponder = require('fleek-responder');

const SWAGGER = require('./swagger.json');

let app = new Koa();

app.use(fleekCtx(SWAGGER));

app.use(fleekResponder({
  strict: true, // Force all responses to validate against the path definitions
  camelCase: true, // Convert shortcuts to camelcase
  default: {
    fallback: 'NotFound'
    downstream: true, // Run default response application on the way down the middleware chain
    upstream: true // Run default response application on the way up the middleware chain
  }
}));

app.use((ctx, next) => {
  console.log(ctx.body); // => { code: 404, error: { description: "not found" } }
  ctx.fleek.response.success({
    data: {
      hello: 'world'
    }
  });
  console.log(ctx.body); // => { code: 200, data: { hello: 'world' } }
  return next();
});

app.listen(3000);
```

# Documentation

**TODO**

## Authors

- [John Hofrichter](https://github.com/johnhof)

_Built and maintained with [<img width="15px" src="http://hart.com/wp-content/themes/hart/img/hart_logo.svg">](http://hart.com/) by the [Hart](http://hart.com/) team._
