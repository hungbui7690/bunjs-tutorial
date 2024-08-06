/*
  Body
  - Validate an incoming HTTP Message (or body).
  - These messages are additional messages for the webserver to process.
  - The body is provided as same as body in fetch API. The content type should be set accordingly to the defined body.

    fetch('https://elysiajs.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: 'Elysia'
        })
    })

*/

import { Elysia, t } from 'elysia'

new Elysia()
  .post('/', () => 'Hello World!', {
    body: t.Object({
      name: t.String(),
    }),
  })
  .listen(5000)

/*
  - The validation should be as follows:

      Body	              Validation
      { name: 'Elysia' }	✅
      { name: 1 }	        ❌
      { alias: 'Elysia' }	❌
      undefined	          ❌

  - Elysia disabled body-parser for GET and HEAD message by default, following the specs of HTTP/1.1 RFC2616
  - If the request method does not include defined semantics for an entity-body, then the message-body SHOULD be ignored when handling the request.
  - Most browsers disable the attachment of the body by default for GET and HEAD method.

*/
