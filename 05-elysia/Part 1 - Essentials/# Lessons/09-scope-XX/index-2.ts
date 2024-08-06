/*
  Scope
  - To apply the hook to the parent instance, we can use the "as" to specify scope of the hook.


*/

import { Elysia } from 'elysia'

const plugin = new Elysia()
  .derive({ as: 'scoped' }, () => {
    return { hi: 'ok' }
  })
  .get('/child', ({ hi }) => hi)

const main = new Elysia()
  .use(plugin)
  // ✅ Hi is now available
  .get('/parent', ({ hi }) => hi)
