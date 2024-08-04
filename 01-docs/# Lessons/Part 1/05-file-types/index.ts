/*
  File types


**************************

  TypeScript
  - Bun natively supports TypeScript out of the box. All files are transpiled on the fly by Bun's fast native transpiler before being executed. Similar to other build tools, Bun does not perform typechecking; it simply removes type annotations from the file.

      bun index.js
      bun index.jsx
      bun index.ts
      bun index.tsx


**************************

  JSX
  - Bun supports .jsx and .tsx files out of the box. Bun's internal transpiler converts JSX syntax into vanilla JavaScript before execution.


**************************

  Text files
  - Text files can be imported as strings.

      import text from "./text.txt"
      console.log(text)


**************************

  SQLite
  - You can import sqlite databases directly into your code. Bun will automatically load the database and return a Database object.

      import db from "./my.db" with {type: "sqlite"};
      console.log(db.query("select * from users LIMIT 1").get());


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
