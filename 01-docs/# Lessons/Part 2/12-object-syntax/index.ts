/*
  Object syntax
  - Thus far, the examples on this page have used the explicit Bun.serve API. Bun also supports an alternate syntax.


*/

// 1.
import { type Serve } from 'bun'

export default {
  fetch(req) {
    return new Response('Bun!')
  },
} satisfies Serve
// Instead of passing the server options into Bun.serve, export default it. This file can be executed as-is; when Bun sees a file with a default export containing a fetch handler, it passes it into Bun.serve under the hood.
