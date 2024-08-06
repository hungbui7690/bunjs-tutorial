/*
  Pattern

**********************

  # Object


*/

import { Elysia } from 'elysia'

class Logger {
  log(value: string) {
    console.log(value)
  }
}
class Trace {}
class Telemetry {}

// Assigning multiple properties is better contained in an object for a single assignment.
const app = new Elysia()
  .decorate({
    logger: new Logger(),
    trace: new Trace(),
    telemetry: new Telemetry(),
  })
  .listen(5000)

// The object offers a less repetitive API for setting multiple values.
