/*
  Cookie Attribute
  # add
    + Like set, add allow us to update multiple cookie properties at once, but instead, will only overwrite the property defined instead of resetting.

  # remove
    + To remove a cookie, you can use either:
        name.remove
        delete cookie.name


*/

import { Elysia } from 'elysia'

new Elysia()
  // extract cookie & name
  .get('/', ({ cookie, cookie: { name } }) => {
    name.remove()

    delete cookie.name
  })
  .listen(5000)
