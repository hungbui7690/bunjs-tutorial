/*
  React & JSX
  ~~ bun add react@canary react-dom@canary
  
  - create src/index.tsx

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
