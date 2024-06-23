/*
  Intro 
  - JS runtime built from scratch to serve the modern JS ecosystem
    > when we talk about JS Runtime > we talk about NodeJS
  - includes a native bundler, transpiler, task runner and npm client
    > we can bundle, transpile and run JS and TS projects 
    > before, we need server (NodeJS) + bundler (Webpack) + Vite (frontend) + Testing Frameworks...
      + BunJS has all that stuffs baked in
  - written using Zig programming language (low level language) > fast + safe + simple > replacement for C / C++
  - drop-in replacements for NodeJS 
    > fully compatible with Node APIs + npm 
    > we can run NodeJS app + install npm packages
    > we will have apis and tools that we don't have with NodeJS
  - unlike NodeJS (built on top of V8 engine) > BunJS is built on top of JS Core Engine (engine of Safari + Webkit)
  - not depends on Node or NPM > minimal stack > increase performance

    1. faster than NodeJS & Deno
      - extends JS Core Engine
      - little dependencies
    2. Elegant APIs
      - minimal set of highly optimized APIs
      - for performing common tasks
    3. Cohesive DX (Developer Experience)
      - complete toolkit for both server/client side

//////////////////////////////

  Features & Advantages
  - fast in everything compare to NodeJS & Deno
    > load huge table from DB + server side rendering + websocket chat server 
  - instead using npm install / run > we use bun install / run
  - we can use ES / CommonJS module in the same file without worry about certain things (breaking)
  - has all the packages that NodeJS has (fs, path, http...)
  - has Web Standard APIS (websocket, fetch, formData, TS...)
  - support:
    > TS: .ts .tsx 
    > JSX: .jsx
  - nodemon:
    > with BunJS, we just need to use --watch
    > also has hot reload option
  - .env:
    > don't need to install .env package
  - has built in bundler 
    > faster than webpack / parcel...
  - has built in sqlite db 

  - we also can use frameworks with BunJS (Express, Koa...)
    > has Alicia JS (20 times faster than Express)

//////////////////////////////
  Installation & Setup
  ~~ npm install -g bun
  ~~ bun --version

  @@ bun init
    > index.ts
    > package.json
    > tsconfig.json

  ## bun run index.ts

  *** if we want to use linux > can install WSL
    > https://www.youtube.com/watch?v=Cvrqmq9A3tA

  *** https://bun.sh/

*/

console.log('Hello via Bun!')
