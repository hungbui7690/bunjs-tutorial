/*
  Multiple path parameters
  - You can have as many path parameters as you like, which will then be stored into a params object.


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/id/:id', ({ params: { id } }) => id)
  .get('/id/:id/:name', ({ params: { id, name } }) => id + ' ' + name)
  .listen(5000)
