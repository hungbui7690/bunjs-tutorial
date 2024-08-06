/*
  Store


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  // ❌ TypeError: counter doesn't exist in store
  // .get('/error', ({ store }) => store.counter)

  // ✅ Because we assigned a counter before, we can now access it
  .state('counter', 0)
  .get('/', ({ store }) => store.counter)
  .listen(5000)

// TIP
// Beware that we cannot use state value before assign.
// Elysia registers state values into the store automatically without explicit type or additional TypeScript generic needed.
