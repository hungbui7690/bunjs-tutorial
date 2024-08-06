/*
  Affix
  - To provide a smoother experience, some plugins might have a lot of property value which can be overwhelming to remap one-by-one.
  - The Affix function which consists of prefix and suffix, allowing us to remap all property of an instance.


*/

import { Elysia } from 'elysia'

const setup = new Elysia({ name: 'setup' }).decorate({
  argon: 'a',
  boron: 'b',
  carbon: 'c',
})

const app = new Elysia()
  .use(setup.prefix('decorator', 'setup'))
  .get('/', ({ setupCarbon, ...rest }) => setupCarbon)
  .listen(5000)

// Allowing us to bulk remap a property of the plugin effortlessly, preventing the name collision of the plugin.
// By default, affix will handle both runtime, type-level code automatically, remapping the property to camelCase as naming convention.
