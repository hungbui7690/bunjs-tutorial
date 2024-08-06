/*
  Context
  - onParse Context is extends from Context with additional properties of the following:
    + contentType: Content-Type header of the request

  - All of the context is based on normal context and can be used like normal context in route handler.


*************************

  Explicit Body
  - By default, Elysia will try to determine body parsing function ahead of time and pick the most suitable function to speed up the process.
  - Elysia is able to determine that body function by reading body.


*/

import { Elysia, t } from 'elysia'

new Elysia().post('/', ({ body }) => body, {
  body: t.Object({
    username: t.String(),
    password: t.String(),
  }),
})

/*
  - Elysia read the body schema and found that, the type is entirely an object, so it's likely that the body will be JSON. Elysia then picks the JSON body parser function ahead of time and tries to parse the body.
  - Here's a criteria that Elysia uses to pick up type of body parser

      application/json: body typed as t.Object
      multipart/form-data: body typed as t.Object, and is 1 level deep with t.File
      application/x-www-form-urlencoded: body typed as t.URLEncoded
      text/plain: other primitive type
      This allows Elysia to optimize body parser ahead of time, and reduce overhead in compile time.

*/
