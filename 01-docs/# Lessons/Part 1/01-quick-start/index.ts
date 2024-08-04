/*
  Quick Start 

  @@ bun init
    -> create tsconfig.json -> strict mode is disable by default
  @@ bun run index.ts

  - package.json
      "scripts": {
        "start": "bun run index.ts"
      },

  @@ bun run start

  
*/

// create a simple HTTP Server
const server = Bun.serve({
  port: 5000,
  fetch(req) {
    return new Response('Bun!')
  },
})

console.log(`Listening on http://localhost:${server.port} ...`)
