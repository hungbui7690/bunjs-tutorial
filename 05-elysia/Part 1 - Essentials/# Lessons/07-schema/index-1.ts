/*
  Schema
  - One of the most important areas to create a secure web server is to make sure that requests are in the correct shape.
  - Elysia handled this by providing a validation tool out of the box to validate incoming requests using Schema Builder.
  - Elysia.t, a schema builder based on TypeBox to validate the value in both runtime and compile-time, providing type safety like in a strict type language.


***************************

  Type
  - Elysia schema can validate the following:

      body - HTTP body.
      query - query string or URL parameters.
      params - Path parameters.
      header - Request's headers.
      cookie - Request's cookie
      response - Value returned from handler

  - Schema can be categorized into 2 types:
    + Local Schema: Validate on a specific route
    + Global Schema: Validate on every route


************************

  Local Schema
  - The local schema is executed on a specific route.


*/

import { Elysia, t } from 'elysia' // t = JavascriptTypeBuilder

new Elysia()
  // To validate a local schema, you can inline schema into a route handler:
  .get('/id/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Numeric(),
    }),
  })
  .listen(5000)

/*
  - This code ensures that our path parameter id, will always be a numeric string and then transform to a number automatically in both runtime and compile-time (type-level).
  - The response should be listed as follows:

      Path	  Response
      /id/1	  1
      /id/a	  Error

*/
