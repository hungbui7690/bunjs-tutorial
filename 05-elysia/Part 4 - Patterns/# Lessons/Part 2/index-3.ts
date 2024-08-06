/*
  Configuration
  - You can set Elysia constructor to set the Web Socket value


*/

import { Elysia, t } from 'elysia'

new Elysia({
  websocket: {
    idleTimeout: 30,
  },
}).listen(5000)

/*
  - Elysia's WebSocket implementation extends Bun's WebSocket configuration, please refer to Bun's WebSocket documentation for more information.
  - The following are a brief configuration from Bun WebSocket

      # perMessageDeflate
      @default false
      Enable compression for clients that support it.
      By default, compression is disabled.

      # maxPayloadLength
      The maximum size of a message.

      # idleTimeout
      @default 120
      After a connection has not received a message for this many seconds, it will be closed.

      # backpressureLimit
      @default 16777216 (16MB)
      The maximum number of bytes that can be buffered for a single connection.

      # closeOnBackpressureLimit
      @default false
      Close the connection if the backpressure limit is reached.
    
*/
