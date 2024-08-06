/*
  Explicit Content Type
  - However, in some scenario if Elysia fails to pick the correct body parser function, we can explicitly tell Elysia to use a certain function by specifying type


*/

import { Elysia, t } from 'elysia'

new Elysia().post('/', ({ body }) => body, {
  // Short form of application/json
  type: 'json',
})

/*
  - Allowing us to control Elysia behavior for picking body parser function to fit our needs in a complex scenario.
  - type may be one of the following:

      type ContentType = |
          | 'text' -> text/plain
          | 'json' -> application/json
          | 'formdata'
          | 'urlencoded'
          | 'text/plain'
          | 'application/json'
          | 'multipart/form-data'
          | 'application/x-www-form-urlencoded'
*/
