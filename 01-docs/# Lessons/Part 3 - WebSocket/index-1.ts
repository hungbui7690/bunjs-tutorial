/*
  WebSockets
  - Bun.serve() supports server-side WebSockets, with on-the-fly compression, TLS support, and a Bun-native publish-subscribe API.
  - ⚡️ 7x more throughput — Bun's WebSockets are fast. For a simple chatroom on Linux x64, Bun can handle 7x more requests per second than Node.js + "ws".


*****************************

  Start a WebSocket server
  - Below is a simple WebSocket server built with Bun.serve, in which all incoming requests are upgraded to WebSocket connections in the fetch handler. The socket handlers are declared in the websocket parameter.

*/

Bun.serve({
  fetch(req, server) {
    // upgrade the request to a WebSocket
    if (server.upgrade(req)) {
      return // do not return a Response
    }
    return new Response('Upgrade failed', { status: 500 })
  },
  websocket: {
    message(ws, message) {}, // a message is received
    open(ws) {}, // a socket is opened
    close(ws, code, message) {}, // a socket is closed
    drain(ws) {}, // the socket is ready to receive more data
  }, // handlers
})
