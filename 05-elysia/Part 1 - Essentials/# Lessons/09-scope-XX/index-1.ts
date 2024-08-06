/*
  Scope
  - By default, hook and schema will apply to current instance only.
  - Elysia has an encapsulation scope for to prevent unintentional side effects.
  - Scope type is to specify the scope of hook whether is should be encapsulated or global.


*/

import { Elysia } from 'elysia'

const plugin = new Elysia()
  .derive(() => {
    return { hi: 'ok' }
  })
  .get('/child', ({ hi }) => hi)

const main = new Elysia()
  .use(plugin)
  // ⚠️ Hi is missing
  .get('/parent', ({ hi }) => hi)

// From the above code, we can see that hi is missing from the parent instance because the scope is local by default if not specified, and will not apply to parent.
