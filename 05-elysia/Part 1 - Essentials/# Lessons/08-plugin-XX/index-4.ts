/*
  Plugin Deduplication
  - By default, Elysia will register any plugin and handle type definitions.
  - Some plugins may be used multiple times to provide type inference, resulting in duplication of setting initial values or routes.
  - Elysia avoids this by differentiating the instance by using name and optional seeds to help Elysia identify instance duplication


*/

import { Elysia } from 'elysia'

const plugin = <T extends string>(config: { prefix: T }) =>
  new Elysia({
    name: 'my-plugin',
    seed: config,
  }).get(`${config.prefix}/hi`, () => 'Hi')

const app = new Elysia()
  .use(
    plugin({
      prefix: '/v2',
    })
  )
  .listen(5000)

// Elysia will use name and seed to create a checksum to identify if the instance has been registered previously or not, if so, Elysia will skip the registration of the plugin.
// If seed is not provided, Elysia will only use name to differentiate the instance. This means that the plugin is only registered once even if you registered it multiple times.
