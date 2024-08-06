/*
  Nullable Cookie
  - To handle nullable cookie value, you can use t.Optional on the cookie name you want to be nullable.


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
        name: t.Optional(
          t.Object({
            id: t.Numeric(),
            name: t.String(),
          })
        ),
      }),
    }
  )
  .listen(5000)
