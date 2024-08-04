/*
  Get Posts
  - in Express, we use req.body to get data 
  - in bun -> await req.json() 


*/

import { serve } from 'bun'
import data from './data.json' // ***
const PORT = 5000

// 1.
interface Post {
  id: number | null
  title: string
  content: string
}

// 2. load data here
let blogPosts: Post[] = data

serve({
  port: PORT,
  async fetch(request: Request) {
    const { method } = request
    const { pathname } = new URL(request.url)
    const pathRegexForID = /^\/api\/posts\/(\d+)$/

    // Getting All Posts
    if (method === 'GET' && pathname === '/api/posts') {
      // 3.
      return new Response(JSON.stringify(blogPosts), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Getting Single Post
    if (method === 'GET') {
      const match = pathname.match(pathRegexForID)
      const id = match && match[1]

      // 4.
      const post = blogPosts.find((post) => post.id === Number(id))

      if (!post) {
        return new Response('Post Not Found', { status: 404 })
      }

      return new Response(JSON.stringify(post), {
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Creating a Post
    if (method === 'POST') {
      // 5a. use request.json() to get data from body
      const { title, content } = await request.json()

      // 5b.
      if (!title || !content)
        return new Response('Please provide title & content', { status: 400 })

      // 5c. create new post
      const newPost: Post = {
        id: new Date().getTime(),
        title,
        content,
      }

      // 5d. add post to array
      blogPosts.push(newPost)

      // 5e. return
      return new Response(JSON.stringify(newPost), {
        headers: { 'Content-Type': 'application/json' },
        status: 201,
      })
    }

    // 6. Updating Post
    if (method === 'PATCH') {
      const match = pathname.match(pathRegexForID)
      const id = match && match[1]

      const postIndex = blogPosts.findIndex((post) => post.id === Number(id))

      if (postIndex === -1) {
        return new Response('Post Not Found', { status: 404 })
      }

      const { title, content } = await request.json()
      blogPosts[postIndex] = {
        ...blogPosts[postIndex],
        title,
        content,
      }

      return Response.json({ message: 'Post updated', status: 200 })
    }

    // 7. Delete Post
    if (method === 'DELETE') {
      const match = pathname.match(pathRegexForID)
      const id = match && match[1]

      const postIndex = blogPosts.findIndex((post) => post.id === id)

      if (postIndex === -1) {
        return new Response('Post Not Found', { status: 404 })
      }
      blogPosts.splice(postIndex, 1)

      return new Response('Post Deleted', { status: 200 })
    }

    return new Response('Not Found', { status: 404 })
  },
})

console.log(`Listening on http://localhost:${PORT} ...`)
