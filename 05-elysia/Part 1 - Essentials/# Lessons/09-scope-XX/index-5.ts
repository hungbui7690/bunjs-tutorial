/*
  Guard
  - Guard accepts the same parameter as inline hook, the only difference is that you can apply hook to multiple routes in the scope.
  - This means that the previous lessons above is translated into:


*/

import { Elysia, t } from 'elysia'

const signUp = (x) => {}
const signIn = (x) => {}
const isUserExists = () => {}

new Elysia()
  .post('/sign-up', ({ body }) => signUp(body), {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  })
  .post('/sign-in', ({ body }) => body, {
    beforeHandle: isUserExists,
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  })
  .get('/', () => 'hi')
  .listen(5000)

/*
  - This code applies validation for body to both '/sign-in' and '/sign-up' instead of inlining the schema one by one but applies not to '/'.
  - We can summarize the route validation as the following:

      Path	      Has validation
      /sign-up	  ✅
      /sign-in	  ✅
      /	          ❌

*/
