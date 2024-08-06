/*
  Naming Convention
  - Duplicated model names will cause Elysia to throw an error. To prevent declaring duplicate model names, we can use the following naming convention.
  - Let's say that we have all models stored at models/<name>.ts, and declare the prefix of the model as a namespace.


*/

import { Elysia, t } from 'elysia'

// admin.model.ts
export const adminModels = new Elysia().model({
  'admin.auth': t.Object({
    username: t.String(),
    password: t.String(),
  }),
})

// user.model.ts
export const userModels = new Elysia().model({
  'user.auth': t.Object({
    username: t.String(),
    password: t.String(),
  }),
})

// This can prevent naming duplication at some level, but in the end, it's best to let the naming convention decision up to your team's agreement is the best option.
// Elysia provides an opinionated option for you to decide to prevent decision fatigue.
