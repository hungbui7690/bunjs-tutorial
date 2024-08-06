/*
  Methods
  - Below are the new methods that are available to the WebSocket route

    # ws
    + Create a websocket handler


*/

import { Elysia, t } from 'elysia'

const app = new Elysia()
  .ws('/ws', {
    message(ws, message) {
      ws.send(message)
    },
  })
  .listen(5000)

// .ws(endpoint: path, options: Partial<WebSocketHandler<Context>>): this
// endpoint: A path to exposed as websocket handler options: Customize WebSocket handler behavior
