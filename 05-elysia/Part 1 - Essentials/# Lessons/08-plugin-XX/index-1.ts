/*
  Plugin
  - Plugin is a pattern that decouples functionality into smaller parts. Creating reusable components for our web server.
  - Defining a plugin is to define a separate instance.


*/

import { Elysia } from 'elysia'

// create plugin
const plugin = new Elysia()
  .decorate('plugin', 'hi')
  .get('/plugin', ({ plugin }) => plugin)

// reuse plugin
const app = new Elysia()
  .use(plugin)
  .get('/', ({ plugin }) => plugin)
  .listen(5000)

/*
  - The plugin will inherit all properties of the plugin instance, including state, decorate, derive, route, lifecycle, etc.
  - Elysia will also handle the type inference automatically as well, so you can imagine as if you call all of the other instances on the main one.

  TIP
  - Notice that the plugin doesn't contain .listen, because .listen will allocate a port for the usage, and we only want the main instance to allocate the port.

*/
