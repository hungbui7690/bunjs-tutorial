/*
  Plugin Deduplication


*/

import { Elysia } from 'elysia'

const plugin = new Elysia({ name: 'plugin' })

const app = new Elysia()
  .use(plugin)
  .use(plugin)
  .use(plugin)
  .use(plugin)
  .listen(5000)

/*
  - This allows Elysia to improve performance by reusing the registered plugins instead of processing the plugin over and over again.

  TIP
  - Seed could be anything, varying from a string to a complex object or class.
  - If the provided value is class, Elysia will then try to use the .toString method to generate a checksum.

*/
