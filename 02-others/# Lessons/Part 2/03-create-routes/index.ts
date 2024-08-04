/*
  Create Routes
  - /
  - /about
  - /err
  - /blog > this with go to error callback (3)


  *** https://bun.sh/docs/api/http#error-handling

*/

import figlet from 'figlet'

const server = Bun.serve({
  port: 5000,

  fetch(req: Request) {
    // 1.
    const url = new URL(req.url)
    if (url.pathname === '/') {
      const body = figlet.textSync('Hola!')
      return new Response(body)
    }
    if (url.pathname === '/about') return new Response('About Page')

    // 2.
    if (url.pathname === '/err') throw new Error('No Resource Found!')

    return new Response('404 !')
  },
  // 3.
  error(error) {
    return new Response(`<pre>${error} \n ${error.message}</pre>`, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  },
})

console.log(`Listening on PORT ${server.port}`)
