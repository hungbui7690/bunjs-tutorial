/*
  Error Provider
  - There are 2 ways to provide a custom error message when the validation fails:
    + inline error property
    + Using onError event


**************************

  Error Property
  - Elysia's offers an additional "error" property, allowing us to return a custom error message if the field is invalid.
  - pic


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .post('/', () => 'Hello World!', {
    body: t.Object(
      {
        x: t.Number(),
      },
      {
        error: 'x must be a number',
      }
    ),
  })
  .listen(3000)
