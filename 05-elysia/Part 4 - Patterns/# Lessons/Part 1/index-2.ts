/*
  Prefixing
  - We can separate a group into a separate plugin instance to reduce nesting by providing a prefix to the constructor.

  ❌ NOT WORK????


*/

import { Elysia } from 'elysia'

const users = new Elysia({ prefix: '/user' })
  .post('/sign-in', () => 'Sign in')
  .post('/sign-up', () => 'Sign up')
  .post('/profile', () => 'Profile')

new Elysia()
  .use(users)
  .get('/', () => 'hello world')
  .listen(5000)
