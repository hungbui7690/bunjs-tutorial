/*
  WebSocketHandler
  - WebSocketHandler extends config from config.
  - Below is a config which is accepted by ws.

  # open
    Callback function for new websocket connection.
      open(ws: ServerWebSocket<{
          // uid for each connection
          id: string
          data: Context
      }>): this

  # message
    Callback function for incoming websocket message.

    Type:
      message(
          ws: ServerWebSocket<{
              // uid for each connection
              id: string
              data: Context
          }>,
          message: Message
      ): this
    - <Message> type based on <schema.message>. Default is <string>.

  # close
    Callback function for closing websocket connection.

    Type:
      close(ws: ServerWebSocket<{
          // uid for each connection
          id: string
          data: Context
      }>): this

  # drain
    Callback function for the server is ready to accept more data.

    Type:
      drain(
          ws: ServerWebSocket<{
              // uid for each connection
              id: string
              data: Context
          }>,
          code: number,
          reason: string
      ): this

  # parse
    Parse middleware to parse the request before upgrading the HTTP connection to WebSocket.

  # beforeHandle
    Before Handle middleware which execute before upgrading the HTTP connection to WebSocket.
    Ideal place for validation.

  # transform
    Transform middleware which execute before validation.

  # transformMessage
    Like transform, but execute before validation of WebSocket message

  # header
    Additional headers to add before upgrade connection to WebSocket.

    
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
