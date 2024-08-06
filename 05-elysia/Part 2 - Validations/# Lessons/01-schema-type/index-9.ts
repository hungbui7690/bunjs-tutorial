/*
  Response
  - The response could accept an object with a key of HTTP status to enforce the response type on a specific status.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/', () => 'hello world', {
    response: {
      200: t.String(),
      400: t.Number(),
    },
  })
  .listen(5000)

/*
  Response	Status	Validation
  'hello'	  200	    ✅
  1	        200	    ❌
  'hello'	  400	    ❌
  1	        400	    ✅
  false	    200	    ❌
  false	    400	    ❌
*/
