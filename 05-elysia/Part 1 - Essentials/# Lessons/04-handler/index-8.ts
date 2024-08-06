/*
  Response
  - Elysia is built on top of Web Standard Request/Response.
  - To comply with the Web Standard, a value returned from route handler will be mapped into a Response by Elysia.


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  // Equivalent to "new Response('hi')"
  .get('/', () => 'hi')

  // If you prefer an explicit Response class, Elysia also handles that automatically.
  .get('/hello', () => new Response('hello'))
  .listen(5000)

// TIP
// Using a primitive value or Response has near identical performance (+- 0.1%), so pick the one you prefer, regardless of performance.
