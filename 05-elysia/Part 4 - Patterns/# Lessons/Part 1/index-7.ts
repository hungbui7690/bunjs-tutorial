/*
  Cookie Schema
  - You can strictly validate cookie type and providing type inference for cookie by using cookie schema with t.Cookie.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get(
    '/',
    ({ cookie: { name } }) => {
      // Set
      name.value = {
        id: 617,
        name: 'Summoning 101',
      }
    },
    {
      cookie: t.Cookie({
        name: t.Object({
          id: t.Numeric(),
          name: t.String(),
        }),
      }),
    }
  )
  .listen(5000)
