/*
  Before Handle
  - Execute after validation and before the main route handler.
  - Designed to provide a custom validation to provide a specific requirement before running the main handler.
  - If a value is returned, the route handler will be skipped.
  
  - It's recommended to use Before Handle in the following situations:
    + Restricted access check: authorization, user sign-in
    + Custom request requirement over data structure


*/

import { Elysia } from 'elysia'

const validateSession = (x) => {
  return x
}

// Below is an example of using the before handle to check for user sign-in.
new Elysia()
  .get('/', () => 'hi', {
    beforeHandle({ set, cookie: { session } }) {
      if (!validateSession(session.value)) return (set.status = 'Unauthorized')
    },
  })
  .listen(5000)

/*
  The response should be listed as follows:

    Is signed in	   Response
    ❌	              Unauthorized
    ✅	              Hi


*/
