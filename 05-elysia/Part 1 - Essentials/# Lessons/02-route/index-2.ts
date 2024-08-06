/*
  Handle
  - Most developers use REST clients like Postman, Insomnia or Hoppscotch to test their API.
  - However, Elysia can be programmatically test using Elysia.handle.

  
*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'hello')
  .get('/hi', () => 'hi')
  .post('/users', () => 'create users')
  .listen(5000)

app.handle(new Request('http://localhost/')).then(console.log)
