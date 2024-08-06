/*
  Grouped Guard
  - We can use a group with prefixes by providing 3 parameters to the group.
      Prefix - Route prefix
      Guard - Schema
      Scope - Elysia app callback

  - With the same API as guard apply to the 2nd parameter, instead of nesting group and guard together.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .group('/v1', (app) =>
    app.guard(
      {
        body: t.Literal('Alex Pandrea'),
      },
      (app) => app.post('/student', ({ body }) => body)
    )
  )
  .listen(5000)
