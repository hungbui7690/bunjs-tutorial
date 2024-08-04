/*
  Install a Package
  - install the figlet package and its type declarations. Figlet is a utility for converting strings into ASCII art.
    @@ bun add figlet
    @@ bun add -d @types/figlet


*/

import figlet from 'figlet' // 1.

const server = Bun.serve({
  port: 5000,
  fetch(req) {
    // 2. restart server & refresh page
    const body = figlet.textSync('Bun!')
    return new Response(body)
  },
})

console.log(`Listening on http://localhost:${server.port} ...`)
