/*
  Change Swagger Endpoint
  - You can change the swagger endpoint by setting path in the plugin config.
      .use(swagger({
          path: '/v2/swagger'
      }))

**************************

  Customize Swagger info


*/

import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(
    swagger({
      documentation: {
        info: {
          title: 'Elysia Documentation',
          version: '1.0.0',
        },
      },
    })
  )
  .get('/', () => 'hello')
  .get('/greeting', () => 'greeting')
  .listen(5000)

// Accessing /swagger would show you a Swagger UI with the generated endpoint documentation from the Elysia server.
// The detail fields follows an OpenAPI V3 definition with auto-completion and type-safety by default.
// Detail is then passed to Swagger to put the description to Swagger route.
