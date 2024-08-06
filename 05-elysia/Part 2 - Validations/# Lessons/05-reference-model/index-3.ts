/*
  Multiple Models
  - model accepts an object with the key as a model name and value as the model definition, multiple models are supported by default.


*/

// auth.model.ts
import { Elysia, t } from 'elysia'

export const authModel = new Elysia().model({
  number: t.Number(),
  sign: t.Object({
    username: t.String(),
    password: t.String(),
  }),
})
