/*
  Create Web Server
  - npm init
  - package.json: 
    > "start": "bun run --watch index.ts"

  *** create server using "serve" fn

*/

const server = Bun.serve({
  port: 5000,
  fetch(req: Request) {
    return new Response('Success!')
  },
})

console.log(`Listening on PORT ${server.port}`)
