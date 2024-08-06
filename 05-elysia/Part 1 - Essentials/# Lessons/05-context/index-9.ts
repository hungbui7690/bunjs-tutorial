/*
  Affix
  - In some condition, we can also remap all property of the plugin:


*/

import { Elysia } from 'elysia'

const setup = new Elysia({ name: 'setup' }).decorate({
  argon: 'a',
  boron: 'b',
  carbon: 'c',
})

const app = new Elysia()
  .use(setup.prefix('all', 'setup'))
  .get('/', ({ setupCarbon, ...rest }) => setupCarbon)
  .listen(5000)
