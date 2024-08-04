/*
  HTTP server
  - Bun also implements fetch and the Node.js http and https modules.
  - These modules have been re-implemented to use Bun's fast internal HTTP infrastructure. Feel free to use these modules directly; frameworks like Express that depend on these modules should work out of the box. For granular compatibility information, see Runtime > Node.js APIs.

  -> To start a high-performance HTTP server with a clean API, the recommended approach is Bun.serve.


**************************

  bun.serve
  -> fetch request handler


*/

// fetch request handler
// The fetch handler handles incoming requests. It receives a Request object and returns a Response or Promise<Response>.
Bun.serve({
  fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/') return new Response('Home page!')
    if (url.pathname === '/blog') return new Response('Blog!')
    return new Response('404!')
  },
})

// The fetch handler supports async/await:
import { sleep, serve } from 'bun'
serve({
  async fetch(req) {
    const start = performance.now()
    await sleep(10)
    const end = performance.now()
    return new Response(`Slept for ${end - start}ms`)
  },
})

// Promise-based responses are also supported:
Bun.serve({
  fetch(req) {
    // Forward the request to another server.
    return fetch('https://example.com')
  },
})

// You can also access the Server object from the fetch handler. It's the second argument passed to the fetch function.
// `server` is passed in as the second argument to `fetch`.
const server = Bun.serve({
  fetch(req, server) {
    const ip = server.requestIP(req)
    return new Response(`Your IP is ${ip}`)
  },
})
