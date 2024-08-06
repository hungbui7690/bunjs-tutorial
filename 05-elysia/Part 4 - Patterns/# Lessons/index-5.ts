/*
  Transform
  - Executed just before Validation process, designed to mutate context to conform with the validation or appending new value.
  - It's recommended to use transform for the following:
    + Mutate existing context to conform with validation.
    + derive is based on onTransform with support for providing type.


*/

import { Elysia, t } from 'elysia'

// Below is an example of using transform to mutate params to be numeric values.
new Elysia()
  .get('/id/:id', ({ params: { id } }) => id, {
    params: t.Object({
      id: t.Number(),
    }),
    transform({ params }) {
      const id = +params.id

      if (!Number.isNaN(id)) params.id = id
    },
  })
  .listen(5000)
