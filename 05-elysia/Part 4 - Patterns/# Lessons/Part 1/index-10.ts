/*
  Constructor
  - You can use Elysia constructor to set global cookie <secret>, and <sign> value to apply to all route globally instead of inlining to every route you need.


*/

import { Elysia, t } from 'elysia'

new Elysia({
  cookie: {
    secrets: 'W#%$GGSAf23@R^&',
    sign: ['profile'],
  },
})
  .get(
    '/',
    ({ cookie: { profile } }) => {
      profile.value = {
        id: 617,
        name: 'Summoning 101',
      }
    },
    {
      cookie: t.Cookie({
        profile: t.Object({
          id: t.Numeric(),
          name: t.String(),
        }),
      }),
    }
  )
  .listen(5000)
