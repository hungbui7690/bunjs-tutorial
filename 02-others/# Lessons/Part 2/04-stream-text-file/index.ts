/*
  Streaming Text File
  - read file and show as Response
  

*/

import figlet from 'figlet'

const server = Bun.serve({
  port: 5000,

  fetch(req: Request) {
    const url = new URL(req.url)
    if (url.pathname === '/') {
      const body = figlet.textSync('Hola!')
      return new Response(body)
    }
    if (url.pathname === '/about') return new Response('About Page')
    if (url.pathname === '/err') throw new Error('No Resource Found!')

    // ***
    if (url.pathname === '/file') return new Response(Bun.file('./file.txt'))

    return new Response('404 !')
  },
  error(error) {
    return new Response(`<pre>${error} \n ${error.message}</pre>`, {
      headers: {
        'Content-Type': 'text/html',
      },
    })
  },
})

console.log(`Listening on PORT ${server.port}`)
