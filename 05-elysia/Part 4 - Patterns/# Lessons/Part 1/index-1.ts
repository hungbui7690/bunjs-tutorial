/*
  Grouping Routes


*/

import { Elysia, t } from 'elysia'

// 1. When creating a web server, you would often have multiple routes sharing the same prefix:
// new Elysia()
//   .post('/user/sign-in', () => 'Sign in')
//   .post('/user/sign-up', () => 'Sign up')
//   .post('/user/profile', () => 'Profile')
//   .listen(5000)

// 2. This can be improved with Elysia.group, allowing us to apply prefixes to multiple routes at the same time by grouping them together:
// new Elysia()
//   .group('/user', (app) =>
//     app
//       .post('/sign-in', () => 'Sign in')
//       .post('/sign-up', () => 'Sign up')
//       .post('/profile', () => 'Profile')
//   )
//   .listen(5000)

// 3. .group() can also accept an optional guard parameter to reduce boilerplate of using groups and guards together:
new Elysia()
  .group(
    '/user',
    {
      body: t.Literal('Alex'),
    },
    (app) =>
      app
        .post('/sign-in', () => 'Sign in')
        .post('/sign-up', () => 'Sign up')
        .post('/profile', () => 'Profile')
  )
  .listen(5000)
