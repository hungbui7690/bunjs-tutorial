/*
  Reference and value
  - To mutate the state, it's recommended to use reference to mutate rather than using an actual value.


*/

import { Elysia } from 'elysia'

// This can apply to store, as it's a global mutable object instead.
new Elysia()
  .state('counter', 0)

  // ✅ Using reference, value is shared
  .get('/', ({ store }) => store.counter++)

  // ❌ Creating a new variable on primitive value, the link is lost
  .get('/error', ({ store: { counter } }) => counter)

  .listen(5000)
