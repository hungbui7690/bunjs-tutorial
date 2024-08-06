/*
  Reference Model
  - We can resolve that by creating a "reference model"  allowing us to name the model and use auto-completion to reference it directly in schema by registering the models with model.


*/

import { Elysia, t } from 'elysia'

// 1.
// const app = new Elysia()
//   .model({
//     sign: t.Object({
//       username: t.String(),
//       password: t.String(),
//     }),
//   })
//   .post('/sign-in', ({ body }) => body, {
//     body: 'sign',
//     response: 'sign',
//   })

// 2. When we want to access the model's group, we can separate a model into a plugin which when registered will provide a set of models instead of multiple import.
export const authModel = new Elysia().model({
  sign: t.Object({
    username: t.String(),
    password: t.String(),
  }),
})

// 3. This not only allows us to separate the concerns but also allows us to reuse the model in multiple places while reporting the model into Swagger documentation.
const app = new Elysia().use(authModel).post('/sign-in', ({ body }) => body, {
  // with auto-completion for existing model name
  body: 'sign',
  response: 'sign',
})
