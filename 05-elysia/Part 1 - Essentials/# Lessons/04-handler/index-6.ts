/*
  set.headers
  - Allowing us to append or delete a response headers represent as Object.


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', ({ set }) => {
    set.headers['x-powered-by'] = 'Elysia'
    return 'a mimir'
  })
  .listen(5000)

// WARNING
// The names of headers should be lowercase to force case-sensitivity consistency for HTTP headers and auto-completion, eg. use set-cookie rather than Set-Cookie.
