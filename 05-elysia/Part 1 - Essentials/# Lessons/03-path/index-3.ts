/*
  Optional path parameters
  - Sometime we might want a static and dynamic path to resolve the same handler.
  - We can make a path parameter optional by adding a question mark ? after the parameter name.


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/id/:id?', ({ params: { id } }) => `id ${id}`)
  .listen(5000)

/*
  The server will respond as follows:

    Path	    Response
    /id	      id undefined
    /id/1	    id 1

*/
