/*
  Grouped Guard
  - From nested grouped guard, we may merge group and guard together by providing guard scope to 2nd parameter of group:


*/

import { Elysia, t } from 'elysia'

// Which results in the follows syntax:
new Elysia()
  .group(
    '/v1',
    {
      body: t.Literal('Alex Pandrea'),
    },
    (app) => app.post('/student', ({ body }) => body)
  )
  .listen(5000)
