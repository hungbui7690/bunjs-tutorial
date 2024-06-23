/*
  The Bundler
  - create src/index.ts + githubAPI.ts
  - build:
    > bun build ./src/index.ts --outfile=./dist/bundle.js
    > bun build ./src/index.ts --outfile=./dist/bundle.js --watch
  - after build, create index.ts

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
