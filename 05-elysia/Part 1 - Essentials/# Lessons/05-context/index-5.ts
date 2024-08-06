/*
  Pattern
  - state, decorate offers a similar APIs pattern for assigning property to Context as the following:
    + key-value
    + object
    + remap

  - Where derive can be only used with remap because it depends on existing value.


**********************

  # key-value
  - We can use state, and decorate to assign a value using a key-value pattern.


*/

import { Elysia } from 'elysia'

class Logger {
  log(value: string) {
    console.log(value)
  }
}

const app = new Elysia()
  .state('counter', 0)
  .decorate('logger', new Logger())
  .listen(5000)
