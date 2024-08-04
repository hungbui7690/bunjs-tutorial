/*
  Environment Variable
  - create .env

*/

const server = Bun.serve({
  port: Bun.env.PORT || 5000, // ***
  // port: process.env.PORT || 5000, // ***
  fetch(req) {
    return new Response('Hello World')
  },
})

console.log(`Listen on port ${server.port}`)
