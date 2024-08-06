/*
  Header
  - HTTP headers let the client and the server pass additional information with an HTTP request or response, usually treated as metadata.
  - This field is usually used to enforce some specific header field, for example, Authorization.
  - Headers are provided as same as body in fetch API.

      fetch('https://elysiajs.com/', {
          headers: {
              authorization: 'Bearer 12345'
          }
      })

  - TIP
    + Elysia will parse headers as a lower-case key only.
    + Please make sure that you are using a lower-case field name when using header validation.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/', ({ query }) => query, {
    headers: t.Object({
      authorization: t.String(),
    }),
  })
  .listen(5000)

/*
  - The validation should be as follows:

    URL                             	Validation
    { authorization: 'Bearer 12345' }	✅
    { X-Request-Id: '1' }	            ❌

*/
