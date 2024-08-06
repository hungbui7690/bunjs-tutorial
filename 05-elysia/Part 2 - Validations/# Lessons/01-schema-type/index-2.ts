/*
  Schema Type
  - Elysia supports declarative schema with the following types:
    + Body 
    + Query
    + Params
    + Headers
    + Cookie 
    + Response


  .get(url, function, {validation})

*/

import { Elysia, t } from 'elysia'

// These properties should be provided as the third argument of the route handler to validate the incoming request.
new Elysia()
  .get('/id/:id', () => 'Hello World!', {
    query: t.Object({
      name: t.String(),
    }),
    params: t.Object({
      id: t.Number(),
    }),
  })
  .listen(5000)

/*
  - The response should as follows:

      URL	                  Query	Params
      /id/a	                ❌	    ❌
      /id/1?name=Elysia	    ✅	    ✅
      /id/1?alias=Elysia	  ❌	    ✅
      /id/a?name=Elysia	    ✅	    ❌
      /id/a?alias=Elysia	  ❌	    ❌


  - When schema is provided, the type will be inferred from the schema automatically, and generate an OpenAPI   type for Swagger documentation generation, leaving out the redundant task of providing type manually.

*/
