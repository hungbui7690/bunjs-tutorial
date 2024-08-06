/*
  Cookie
  - An HTTP cookie is a small piece of data that a server sends to the client, it's data that is sent with every visit to the same web server to let the server remember client information.
  - In simpler terms, a stringified state that sent with every request.
  - This field is usually used to enforce some specific cookie field.
  - A cookie is a special header field that Fetch API doesn't accept a custom value but is managed by the browser. To send a cookie, you must use a credentials field instead:

      fetch('https://elysiajs.com/', {
          credentials: 'include'
      })


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get('/', ({ cookie }) => cookie.session.value, {
    cookie: t.Cookie({
      session: t.String(),
    }),
  })
  .listen(5000)
