/*
  bun x
  - bunx === bun x

  ~~ terminal: bunx cowsay Hello Bun
    > install package
    > later, if we want to install React or something like that 
      + instead of using npx, we use bunx

  
    1. create modules.ts
      


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
