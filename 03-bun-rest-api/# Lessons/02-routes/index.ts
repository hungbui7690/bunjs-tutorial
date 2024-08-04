/*
  Routes
  - From here, we need to start working on our routes. The routes we are going to build out are the following:

      GET — blog post by ID
      GET — all blog posts
      POST — create blog post
      PATCH — edit blog post by ID
      DELETE — delete blog post by ID

  - To keep the example as simple as possible, we won’t be adding a database to our project. We will simply just rely on values stored in memory.

  - Building the routes is dependant on the request received by the fetch function. Let’s write a check for each route to see how that will end up looking

************************

  1. get method & path 
    -> request.url === path


  - The way Bun handle routes is different than NodeJS
    -> the 1st route has pathname -> but the rest does not have path name -> this is because the rest of routes has url params -> next lesson
      
      Get all posts   ->  if (method === 'GET' && pathname === '/api/posts'){} 
      Get single post ->  if (method === 'GET'){}
      Create post     ->  if (method === 'POST'){}
      Update Post     ->  if (method === 'PATCH'){}
      Delete Post     ->  if (method === 'UPDATE'){}

*/

import { serve } from 'bun'

const PORT = 5000

serve({
  port: PORT,
  async fetch(request: Request) {
    const { method } = request
    const { pathname } = new URL(request.url)

    // Getting All Posts
    if (method === 'GET' && pathname === '/api/posts') {
      return new Response('Get All Posts')
    }

    // Getting Single Post
    if (method === 'GET') {
      return new Response('Get Single Post')
    }

    // Creating a Post
    if (method === 'POST') {
      return new Response('Create Post')
    }

    // Updating Post
    if (method === 'PATCH') {
      return new Response('Update Post')
    }

    // Delete Post
    if (method === 'DELETE') {
      return new Response('Delete Post')
    }

    return new Response('Not Found', { status: 404 })
  },
})

console.log(`Listening on http://localhost:${PORT} ...`)
