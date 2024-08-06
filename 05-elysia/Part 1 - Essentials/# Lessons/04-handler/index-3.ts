/*
  Set
  - set is a mutable property that form a response accessible via Context.set.
    + set.status - Set custom status code
    + set.headers - Append custom headers
    + set.redirect - Append redirect


**********************

  Status
  - We can return a custom status code by using either:
    + error function (recommended)
    + set.status


**********************

  error
  - A dedicated error function for returning status code with response.


*/

import { Elysia } from 'elysia'

// status = 418
const app = new Elysia()
  .get('/', ({ error }) => error(418, 'Error!!'))
  .listen(5000)

/*
  - It's recommend to use error inside main handler as it has better inference:
    + allows TypeScript to check if a return value is correctly type to response schema
    + autocompletion for type narrowing base on status code
    + type narrowing for error handling using End-to-end type safety (Eden)

*/
