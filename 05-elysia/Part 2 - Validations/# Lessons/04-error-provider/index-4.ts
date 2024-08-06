/*
  Error list
  - ValidationError provides a method ValidatorError.all, allowing us to list all of the error causes.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .post('/', ({ body }) => body, {
    body: t.Object({
      name: t.String(),
      age: t.Number(),
    }),
    error({ code, error }) {
      switch (code) {
        case 'VALIDATION':
          console.log(error.all)

          // Find a specific error name (path is OpenAPI Schema compliance)
          const name = error.all.find((x) => x.path === '/name')

          // If has a validation error, then log it
          if (name) console.log(name)
      }
    },
  })
  .listen(3000)
