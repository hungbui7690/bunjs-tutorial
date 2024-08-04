/*
  Figlet  
  - Add package:
    ~~ bun add figlet
    ~~ bun add @types/figlet

*/

import figlet from 'figlet' // 1.

const server = Bun.serve({
  port: 5000,

  fetch(req: Request) {
    // 2.
    const body = figlet.textSync('Hola!')
    return new Response(body)
  },
})

console.log(`Listening on PORT ${server.port}`)
