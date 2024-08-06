/*
  Params
  - For detail explanation, see path, but to summarize.
  - The dynamic path is a pattern matching for a specific part of the URL segment which could store potentially important information, to be used later.
  - Elysia uses the segment prefix with a colon ":" -> /:id


************************

  - For instance, /id/:id tells Elysia to match any path up until /id, then the next segment as a params object.
  - params is used to validate the path parameter object.
  - This field is usually not needed as Elysia can infer types from path parameters automatically, unless a need for specific value pattern is need, for example numeric value or template literal pattern.

      fetch('https://elysiajs.com/id/1')


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/id/:id', ({ params }) => params, {
    params: t.Object({
      id: t.Number(),
    }),
  })
  .listen(5000)

/*
  - The validation should be as follows:

      URL	    Validation
      /id/1	  ✅
      /id/a	  ❌

*/
