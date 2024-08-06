/*
  Functional callback
  - It's recommended to define a new plugin instance instead of using a function callback.
  - Functional callback allows us to access the existing property of the main instance. For example, checking if specific routes or stores existed.
  - To define a functional callback, create a function that accepts Elysia as a parameter.


*/

import { Elysia } from 'elysia'

const plugin = (app: Elysia) =>
  app.state('counter', 0).get('/plugin', () => 'Hi')

const app = new Elysia()
  .use(plugin)
  .get('/counter', ({ store: { counter } }) => counter)
  .listen(5000)

/*
  - Once passed to Elysia.use, functional callback behaves as a normal plugin except the property is assigned directly to

  TIP
  - You shall not worry about the performance difference between a functional callback and creating an instance.
  - Elysia can create 10k instances in a matter of milliseconds, the new Elysia instance has even better type inference performance than the functional callback.

*/
