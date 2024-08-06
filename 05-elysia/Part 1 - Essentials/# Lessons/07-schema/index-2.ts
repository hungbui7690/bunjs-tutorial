/*
  Global Schema
  - Register hook into every handler that came after.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/none', () => 'hi')
  .guard({
    query: t.Object({
      name: t.String(),
    }),
  })
  .get('/query', ({ query: { name } }) => name)
  .get('/any', ({ query }) => query)
  .listen(5000)

/*
  - This code ensures that the query must have name with a string value for every handler after it. The response should be listed as follows:

      Path	          Response
      /none	          hi
      /none?name=a	  hi
      /query	        error
      /query?name=a	  a

  - If multiple global schemas are defined for same property, the latest one will have the preference. If both local and global schemas are defined, the local one will have the preference.

*/
