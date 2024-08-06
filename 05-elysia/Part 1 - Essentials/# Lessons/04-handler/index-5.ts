/*
  set.status
  - You can also set a status code using the common name of the status code instead of using a number.


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', ({ set }) => {
    set.status = 'OK'
    return 'OK'
  })
  .listen(5000)
