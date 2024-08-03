/*
  bun.serve()

  ~~ bun run --watch index.ts 
  ~~ bun run --hot index.ts 

*/

const server = Bun.serve({
  port: 5000,
  fetch(req) {
    return new Response('Hello World')
  },
})

console.log(`Listen on port ${server.port}`)
