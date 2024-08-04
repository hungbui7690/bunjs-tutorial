/*
  Changing the port and hostname
  # Configuring a default port
    - Bun supports several options and environment variables to configure the default port. The default port is used when the port option is not set.

  # --port CLI flag

      bun --port=4002 server.ts

  # BUN_PORT environment variable

      BUN_PORT=4002 bun server.ts
  # PORT environment variable

      PORT=4002 bun server.ts

  # NODE_PORT environment variable

      NODE_PORT=4002 bun server.ts



*/

// To configure which port and hostname the server will listen on, set port and hostname in the options object.
Bun.serve({
  port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  hostname: 'zyz.com', // defaults to "0.0.0.0"
  fetch(req) {
    return new Response('404!')
  },
})

// To randomly select an available port, set port to 0.
const server = Bun.serve({
  port: 0, // random port
  fetch(req) {
    return new Response('404!')
  },
})

// You can view the chosen port by accessing the port property on the server object, or by accessing the url property.
console.log(server.port) // random port
console.log(server.url) // http://localhost:3000
