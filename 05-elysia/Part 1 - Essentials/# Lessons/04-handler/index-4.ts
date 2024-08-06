/*
  set.status
  - Set a default status code if not provided.
  - It's recommended to use this in a plugin that only needs to return a specific status code while allowing the user to return a custom value. For example, HTTP 201/206 or 403/405, etc.


*/

import { Elysia } from 'elysia'

// status = 418
const app = new Elysia()
  .onBeforeHandle(({ set }) => {
    set.status = 418
    return 'Testing'
  })
  .get('/', () => 'hi')
  .listen(5000)

/*
  TIP
  - HTTP Status indicates the type of response. If the route handler is executed successfully without error, Elysia will return the status code 200.

*/
