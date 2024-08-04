/*
  WebSockets


*/

// The first argument to each handler is the instance of ServerWebSocket handling the event. The ServerWebSocket class is a fast, Bun-native implementation of WebSocket with some additional features.
Bun.serve({
  fetch(req, server) {}, // upgrade logic
  websocket: {
    message(ws, message) {
      ws.send(message) // echo back the message
      // ws.send("Hello world"); // string
      // ws.send(response.arrayBuffer()); // ArrayBuffer
      // ws.send(new Uint8Array([1, 2, 3])); // TypedArray | DataView
    },
  },
})
