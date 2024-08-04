/*
  bun create
  - Template a new Bun project with bun create. This is a flexible command that can be used to create a new project with a create-<template> npm package, a GitHub repo, or a local template.
  - If you're looking to create a brand new empty project, use bun init.


**************************

  From npm
  - bun create <template> [<destination>]

  - Assuming you don't have a local template with the same name, this command will download and execute the create-<template> package from npm. The following two commands will behave identically:

      bun create remix
      bunx create-remix


**************************

  From GitHub
  - This will download the contents of the GitHub repo to disk.

      bun create <user>/<repo>
      bun create github.com/<user>/<repo>

  - Optionally specify a name for the destination folder. If no destination is specified, the repo name will be used.

      bun create <user>/<repo> mydir
      bun create github.com/<user>/<repo> mydir

  - Bun will perform the following steps:
    + Download the template
    + Copy all template files into the destination folder
    + Install dependencies with bun install.
    + Initialize a fresh Git repo. Opt out with the --no-git flag.
    + Run the template's configured start script, if defined.


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
