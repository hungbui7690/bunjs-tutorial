/*
  Intro
  - 21x faster than Express
    -> Being one of the top-performing TypeScript frameworks. Comparable to Go and Rust.


***************************

  Performance
  - Building on Bun and extensive optimization like Static Code Analysis allows Elysia to generate optimized code on the fly.
  - Elysia can outperform most of the web frameworks available today[1], and even match the performance of Golang and Rust framework[2].


***************************

  Installation
  ~~ bun create elysia app


***************************

  Start Dev Server
  ~~ bun dev


***************************

  Manual Installation
  - To manually create a new Elysia app, install Elysia as a package:
    @@ bun add elysia

  - Open your package.json file and add the following scripts:
    {
      "scripts": {
        "dev": "bun --watch src/index.ts",
        "build": "bun build src/index.ts",
        "start": "NODE_ENV=production bun src/index.ts",
        "test": "bun test"
      }
    }

  - tsconfig.json -> "strict":true

*/

import { Elysia } from 'elysia'

const app = new Elysia().get('/', () => 'Hello Elysia').listen(5000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
