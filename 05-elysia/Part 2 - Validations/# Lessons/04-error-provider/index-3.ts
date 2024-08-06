/*
  onError
  - We can customize the behavior of validation based on onError event by narrowing down the error code call "VALIDATION".


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .onError(({ code, error }) => {
    if (code === 'VALIDATION') return error.message
  })
  .listen(3000)

// Narrowed down error type, will be typed as ValidationError imported from 'elysia/error'.
// return error.validator.Errors(error.value).First().message

// ValidationError exposed a property name validator typed as TypeCheck, allowing us to interact with TypeBox functionality out of the box.
