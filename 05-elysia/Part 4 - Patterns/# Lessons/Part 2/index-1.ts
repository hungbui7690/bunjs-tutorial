/*
  WebSocket
  - WebSocket is a realtime protocol for communication between your client and server.
  - Unlike HTTP where our client repeatedly asking the website for information and waiting for a reply each time, WebSocket sets up a direct line where our client and server can send messages back and forth directly, making the conversation quicker and smoother without having to start over each message.
  - SocketIO is a popular library for WebSocket, but it is not the only one. Elysia uses uWebSocket which Bun uses under the hood with the same API.


*/

import { Elysia, t } from 'elysia'

// To use websocket, simply call Elysia.ws():
new Elysia()
  .ws('/ws', {
    message(ws, message) {
      ws.send(message)
    },
  })
  .listen(5000)
