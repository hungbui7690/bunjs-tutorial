/*
  Basic Server
  1. bun init
  2. bun run index.ts
  3. bun run dev -> ➜ bun --hot index.ts


*/

import { serve } from 'bun'

const PORT = 5000

serve({
  port: PORT,
  async fetch(request) {
    return new Response('Hello, world!')
  },
})

console.log(`Listening on http://localhost:${PORT} ...`)
