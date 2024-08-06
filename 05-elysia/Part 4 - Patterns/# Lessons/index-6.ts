/*
  Derive
  - Designed to append new value to context directly before validation process storing in the same stack as transform.
  - Unlike state and decorate that assigned value before the server started. derive assigns a property when each request happens. Allowing us to extract a piece of information into a property instead.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .derive(({ headers }) => {
    const auth = headers['Authorization']

    return {
      bearer: auth?.startsWith('Bearer ') ? auth.slice(7) : null,
    }
  })
  .get('/', ({ bearer }) => bearer)

// Because derive is assigned once a new request starts, derive can access Request properties like headers, query, body where store, and decorate can't.
// Unlike state, and decorate. Properties which assigned by derive is unique and not shared with another request.
