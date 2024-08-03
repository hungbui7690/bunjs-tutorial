/*
  Setup Web Server in Elysia JS
  - 18x faster than Express
  - faster than HonoJS
  - Elysia === Hono === Express === framework 
  - Bun === NodeJS === runtime

    @@ bun create elysia .


*/

import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Hello Elysia').listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
