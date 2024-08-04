/*
  bun run
  - The bun CLI can be used to execute JavaScript/TypeScript files, package.json scripts, and executable packages.


**************************

  Performance
  - Bun is designed to start fast and run fast.
  - Under the hood Bun uses the JavaScriptCore engine, which is developed by Apple for Safari. In most cases, the startup and running performance is faster than V8, the engine used by Node.js and Chromium-based browsers. Its transpiler and runtime are written in Zig, a modern, high-performance language. On Linux, this translates into startup times 4x faster than Node.js.


**************************

  - Use bun run to execute a source file.
      bun run index.js

  - Bun supports TypeScript and JSX out of the box. Every file is transpiled on the fly by Bun's fast native transpiler before being executed.
      bun run index.js
      bun run index.jsx
      bun run index.ts
      bun run index.tsx

  - Alternatively, you can omit the run keyword and use the "naked" command; it behaves identically.
      bun index.tsx
      bun index.js


**************************

  --watch
  - To run a file in watch mode, use the --watch flag.
      ~~ bun --watch run index.tsx

  - Note — When using bun run, put Bun flags like --watch immediately after bun.
      bun --watch run dev # ✔️ do this
      bun run dev --watch # ❌ don't do this
  - Flags that occur at the end of the command will be ignored and passed through to the "dev" script itself.


**************************

  Run a package.json script
  - bun [bun flags] run <script> [script flags]
  - Your package.json can define a number of named "scripts" that correspond to shell commands.
      {
        "scripts": {
          "clean": "rm -rf dist && echo 'Done.'",
          "dev": "bun server.ts"
        }
      }

  - Use bun run <script> to execute these scripts.
      bun run clean
      $ rm -rf dist && echo 'Done.'
      Cleaning...
      Done.

  - If there is a name conflict between a package.json script and a built-in bun command (install, dev, upgrade, etc.) Bun's built-in command takes precedence. In this case, use the more explicit bun run command to execute your package script.
      bun run dev

  - To see a list of available scripts, run bun run without any arguments.
      bun run
      quickstart scripts:

      bun run clean
        rm -rf dist && echo 'Done.'

      bun run dev
        bun server.ts

      2 scripts


*/

import figlet from 'figlet'

const server = Bun.serve({
  port: 5000,
  fetch(req) {
    const body = figlet.textSync('Bun!')
    return new Response(body)
  },
})

console.log(`Listening on http://localhost:${server.port} ...`)
