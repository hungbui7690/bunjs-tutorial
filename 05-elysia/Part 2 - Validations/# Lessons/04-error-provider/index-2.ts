/*
  Error message as function
  - Over a string, Elysia type's error can also accepts a function to programatically return custom error for each property.
  - The error function accepts same argument as same as ValidationError


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .post('/', () => 'Hello World!', {
    body: t.Object({
      x: t.Number({
        error(error) {
          return 'Expected x to be a number'
        },
      }),
    }),
  })
  .listen(3000)
