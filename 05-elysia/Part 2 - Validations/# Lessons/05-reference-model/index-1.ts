/*
  Reference Model
  - Sometimes you might find yourself declaring duplicated models, or re-using the same model multiple times.
  - With reference model, we can name our model and reuse them by referencing with name.


*/

import { Elysia, t } from 'elysia'

// Maybe in a different file eg. models.ts
const SignDTO = t.Object({
  username: t.String(),
  password: t.String(),
})

const app = new Elysia().post('/sign-in', ({ body }) => body, {
  body: SignDTO,
  response: SignDTO,
})

// This method of separating the concerns is an effective approach but we might find ourselves reusing multiple models with different controllers as the app gets more complex.
