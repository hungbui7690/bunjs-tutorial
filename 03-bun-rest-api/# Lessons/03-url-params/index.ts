/*
  URL Params 
  - because Bun does not support path parameters (it only supports query parameters) out of the box so we have to extract the values ourselves.
    -> use regex


*/

import { serve } from 'bun'

const PORT = 5000

serve({
  port: PORT,
  async fetch(request: Request) {
    const { method } = request
    const { pathname } = new URL(request.url)
    const pathRegexForID = /^\/api\/posts\/(\d+)$/ // 1.

    // Getting All Posts
    if (method === 'GET' && pathname === '/api/posts') {
      return new Response('Get All Posts')
    }

    // Getting Single Post
    if (method === 'GET') {
      const match = pathname.match(pathRegexForID) // 2a.
      const id = match && match[1]

      return Response.json({ method: 'GET', id, match })
    }

    // Creating a Post
    if (method === 'POST') {
      return new Response('Create Post')
    }

    // Updating Post
    if (method === 'PATCH') {
      const match = pathname.match(pathRegexForID) // 2b.
      const id = match && match[1]
      return Response.json({ method: 'PATCH', id })
    }

    // Delete Post
    if (method === 'DELETE') {
      const match = pathname.match(pathRegexForID) // 2d.
      const id = match && match[1]
      return Response.json({ method: 'DELETE', id })
    }

    return new Response('Not Found', { status: 404 })
  },
})

console.log(`Listening on http://localhost:${PORT} ...`)
