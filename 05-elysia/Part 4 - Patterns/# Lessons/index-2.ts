/*
  Parse
  - Parse is an equivalent of body parser in Express.
  - A function to parse body, the return value will be append to Context.body, if not, Elysia will continue iterating through additional parser functions assigned by onParse until either body is assigned or all parsers have been executed.

  - By default, Elysia will parse the body with content-type of:
    + text/plain
    + application/json
    + multipart/form-data
    + application/x-www-form-urlencoded

  - It's recommended to use the onParse event to provide a custom body parser that Elysia doesn't provide.


*/

import { Elysia } from 'elysia'

// Below is an example code to retrieve value based on custom headers.
new Elysia()
  .onParse(({ request, contentType }) => {
    if (contentType === 'application/custom-type') return request.text()
  })
  .get('/', () => 'hello')
  .listen(5000)

// The returned value will be assigned to Context.body. If not, Elysia will continue iterating through additional parser functions from onParse stack until either body is assigned or all parsers have been executed.
