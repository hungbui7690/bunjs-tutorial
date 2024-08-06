/*
  Response
  - Validate the return value of the handler.
  - This field isn't usually used unless the need to enforce a specific value of return type is needed or for documentation purposes.
  - If provided, by default, Elysia will try to enforce type using TypeScript to provide a type hint for your IDE.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/', () => 'hello world', {
    response: t.String(),
  })
  .listen(5000)
