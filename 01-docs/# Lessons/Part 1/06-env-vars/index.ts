/*
  Environment variables
  - Bun reads your .env files automatically and provides idiomatic ways to read and write your environment variables programmatically. Plus, some aspects of Bun's runtime behavior can be configured with Bun-specific environment variables.

  - Bun reads the following files automatically (listed in order of increasing precedence).
      .env
      .env.production, .env.development, .env.test (depending on value of NODE_ENV)
      .env.local

  
****************************

  .env
    FOO=hello
    BAR=world

  - Variables can also be set via the command line.
    -> bun run dev FOO=helloworld

  - Or programmatically by assigning a property to process.env.
    -> process.env.FOO = "hello"


****************************

  Manually specifying .env files
  - Bun supports --env-file to override which specific .env file to load. You can use --env-file when running scripts in bun's runtime, or when running package.json scripts.

      bun --env-file=.env.1 src/index.ts
      bun --env-file=.env.abc --env-file=.env.def run build


****************************

  Expansion
  - Environment variables are automatically expanded. This means you can reference previously-defined variables in your environment variables.

      FOO=world
      BAR=hello$FOO
      -> process.env.BAR  => "helloworld"

  - This is useful for constructing connection strings or other compound values.

      DB_USER=postgres
      DB_PASSWORD=secret
      DB_HOST=localhost
      DB_PORT=5432
      DB_URL=postgres://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME

  - This can be disabled by escaping the $ with a backslash.

      FOO=world
      BAR=hello\$FOO
      -> process.env.BAR // => "hello$FOO"

  *** Generally speaking, you won't need dotenv or dotenv-expand anymore, because Bun reads .env files automatically.


****************************

  Reading environment variables
  - The current environment variables can be accessed via process.env.

      process.env.API_TOKEN // => "secret"

  - Bun also exposes these variables via Bun.env and import.meta.env, which is a simple alias of process.env.

      Bun.env.API_TOKEN // => "secret"
      import.meta.env.API_TOKEN // => "secret"

  - To print all currently-set environment variables to the command line, run bun --print process.env. This is useful for debugging.

      bun --print process.env
      BAZ=stuff
      FOOBAR=aaaaaa
      ...
      ...


****************************

  TypeScript
  - In TypeScript, all properties of process.env are typed as string | undefined.

      Bun.env.whatever -> string | undefined


*/

import figlet from 'figlet'

process.env.FOO = 'hello'

const server = Bun.serve({
  port: 5000,
  fetch(req) {
    const body = figlet.textSync('Bun!')
    return new Response(body)
  },
})

console.log(`Listening on http://localhost:${server.port} ...`)
