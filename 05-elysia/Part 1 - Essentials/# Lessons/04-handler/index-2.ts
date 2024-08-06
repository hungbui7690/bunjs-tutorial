/*
  Context
  - Context is an request's information sent to server.


*/

import { Elysia } from 'elysia'

// return /greeting
const app = new Elysia().get('/greeting', ({ path }) => path).listen(5000)
