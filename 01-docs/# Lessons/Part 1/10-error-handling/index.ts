/*
  Error handling


*/

// 1. To activate development mode, set development: true.
// Bun.serve({
//   port: 5000,
//   development: true,
//   fetch(req) {
//     throw new Error('woops!')
//   },
// })
// -> localhost:3000 -> default port

// 2. error callback
// To handle server-side errors, implement an error handler. This function should return a Response to serve to the client when an error occurs. This response will supersede Bun's default error page in development mode.
// Bun.serve({
//   port: 5000,
//   fetch(req) {
//     throw new Error('woops!')
//   },
//   error(error) {
//     return new Response(`<pre>${error}\n${error.stack}</pre>`, {
//       headers: {
//         'Content-Type': 'text/html',
//       },
//     })
//   },
// })

// 3. The call to Bun.serve returns a Server object. To stop the server, call the .stop() method.
const server = Bun.serve({
  port: 5000,
  fetch() {
    return new Response('Bun!')
  },
})
server.stop()
