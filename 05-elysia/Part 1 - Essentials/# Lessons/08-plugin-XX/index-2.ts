/*
  Config
  - To make the plugin more useful, allowing customization via config is recommended.
  - You can create a function that accepts parameters that may change the behavior of the plugin to make it more reusable.


*/

import { Elysia } from 'elysia'

const version = (version = 1) => new Elysia().get('/version', version)

const app = new Elysia().use(version(1)).listen(5000)
