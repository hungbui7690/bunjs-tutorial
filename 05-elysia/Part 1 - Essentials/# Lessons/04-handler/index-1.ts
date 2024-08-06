/*
  Handler
  - After a resource is located, a function that respond is refers as handler

  🎯 abc.txt should be placed in root -> though index.ts is in .src/

*/

import { Elysia } from 'elysia'

Bun.file('abc.txt')

const app = new Elysia()
  // 1. the function `() => 'hello world'` is a handler
  .get('/', () => 'hello world')

  // 2. Handler maybe a literal value, and can be inlined.
  .get('/video', async () => {
    try {
      const file = Bun.file('./abc.txt')
      return file.text()
    } catch (error) {
      console.log(error)
    }
  })
  .listen(5000)

/*
  - Using an inline value always returns the same value which is useful to optimize performance for static resource like file.
  - This allows Elysia to compile the response ahead of time to optimize performance.

  TIP
  - Providing an inline value is not a cache.
  - Static Resource value, headers and status can be mutate dynamically using lifecycle.

*/
