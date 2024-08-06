/*
  Decorate
  - <decorate> assigns an additional property to Context directly without prefix.
  - The difference is that the value should be read-only and not reassigned later.
  - This is an ideal way to assign additional functions, singleton, or immutable property to all handlers.


*/

import { Elysia } from 'elysia'

class Logger {
  log(value: string) {
    console.log(value)
  }
}

const app = new Elysia()
  .decorate('logger', new Logger())

  // ✅ defined from the previous line
  .get('/', ({ logger }) => {
    logger.log('hi')

    return 'hi'
  })
  .listen(5000)
