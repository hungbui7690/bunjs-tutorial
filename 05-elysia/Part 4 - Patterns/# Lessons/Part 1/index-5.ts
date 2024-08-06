/*
  Cookie Attribute
  - # set
    + set permits updating multiple cookie properties all at once through reset all property and overwrite the property with a new value.


*/

import { Elysia } from 'elysia'

new Elysia()
  .get('/', ({ cookie: { name } }) => {
    name.set({
      domain: 'millennium.sh',
      httpOnly: true,
    })

    return { name }
  })
  .listen(5000)
