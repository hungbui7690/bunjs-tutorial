/*
  Derive
  - Like decorate, we can assign an additional property to Context directly.
  - Instead of assign before server started, derive assigns when request happens.
  - Allowing us to "derive" (create a new property based on existing property).


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  // derive bearer based on headers.authorization
  .derive(({ headers }) => {
    const auth = headers['authorization']
    return {
      bearer: auth?.startsWith('Bearer ') ? auth.slice(7) : null,
    }
  })
  .get('/', ({ bearer }) => `Bearer: ${bearer}`)
  .listen(5000)

/*
  - Because derive is assigned once a new request starts, derive can access Request properties like headers, query, body where store, and decorate can't.
  - Unlike state, and decorate. Properties that are assigned by derive are unique and not shared with another request.

  TIP
  - Derive is similar to resolve but store in a different queue.
  - derive is stored in transform queue while resolve stored in beforeHandle queue.

*/
