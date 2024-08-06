/*
  WebSocket message validation:
  - Same as normal route, WebSockets also accepts a schema object to strictly type and validate requests.

  - Postman -> ws://localhost:5000/ws


*/

import { Elysia, t } from 'elysia'

// To use websocket, simply call Elysia.ws():
const app = new Elysia()
  .ws('/ws', {
    // validate incoming message
    body: t.Object({
      message: t.String(),
    }),
    message(ws, { message }) {
      ws.send({
        message,
        time: Date.now(),
      })
    },
  })
  .listen(5000)

/*
  WebSocket schema can validate the following:
    message - An incoming message.
    query - query string or URL parameters.
    params - Path parameters.
    header - Request's headers.
    cookie - Request's cookie
    response - Value returned from handler

  By default Elysia will parse incoming stringified JSON message as Object for validation.  
*/
