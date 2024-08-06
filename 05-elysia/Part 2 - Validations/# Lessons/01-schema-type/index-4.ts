/*
  Query
  - A query string is a part of the URL that starts with ? and can contain one or more query parameters, which are key-value pairs used to convey additional information to the server, usually for customized behavior like filter or search.
  - Query is provided after the ? in Fetch API.

      fetch('https://elysiajs.com/?name=Elysia')

  - When specifying query parameters, it's crucial to understand that all query parameter values must be represented as strings. This is due to how they are encoded and appended to the URL.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/', ({ query }) => query, {
    query: t.Object({
      name: t.String(),
      alias: t.Optional(t.String()),
    }),
  })
  .listen(5000)

/*
  - The validation should be as follows:

      Body	              Validation
      { name: 'Elysia' }	✅
      { name: 1 }	        ❌
      { alias: 'Elysia' }	❌
      undefined	          ❌

*/
