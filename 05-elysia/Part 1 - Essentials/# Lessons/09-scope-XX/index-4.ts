/*
  Guard
  - Guard allows us to apply hook and schema into multiple routes all at once.


*/

import { Elysia, t } from 'elysia'

const signUp = (x) => {}
const signIn = (x) => {}
const isUserExists = () => {}

new Elysia()
  .guard(
    {
      body: t.Object({
        username: t.String(),
        password: t.String(),
      }),
    },
    (app) =>
      app
        .post('/sign-up', ({ body }) => signUp(body))
        .post('/sign-in', ({ body }) => signIn(body), {
          beforeHandle: isUserExists,
        })
  )
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
