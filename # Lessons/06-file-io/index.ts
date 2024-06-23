/*
  File I/O
  - Bun has "fs" package
    > but instead of "fs", it has the optimized version > File I/O API

    (1) create file.ts

*/

const server = Bun.serve({
  port: Bun.env.PORT || 5000,
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/') return new Response('Homepage')
    if (url.pathname === '/blog') return new Response('Blog')

    return new Response('404!')
  },
})

console.log(`Listen on port ${server.port}`)
