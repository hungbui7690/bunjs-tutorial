/*
  Creating Documentation
  - Elysia has first-class support and follows OpenAPI schema by default.
  - Allowing any Elysia server to generate a Swagger page and serve as documentation automatically by using just 1 line of the Elysia Swagger plugin.


****************************

  - To generate the Swagger page, install the plugin:

    @@ bun add @elysiajs/swagger

  - For more information about Swagger plugin, see the Swagger plugin page.


****************************

  Route definitions
  - <schema> is used to customize the route definition, not only that it will generate an OpenAPI schema and Swagger definitions, but also type validation, type-inference and auto-completion.
  - However, sometime defining a type only isn't clear what the route might work. You can use schema.detail fields to explicitly define what the route is all about.


*/

import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(swagger({ path: '/v2/swagger' })) // http://localhost:5000/v2/swagger
  .get('/', () => 'hello')
  .get('/greeting', () => 'greeting')
  .post('/sign-in', ({ body }) => body, {
    body: t.Object(
      {
        username: t.String(),
        password: t.String(),
      },
      {
        description: 'Expected an username and password', // add description for swagger
      }
    ),
    detail: {
      summary: 'Sign in the user',
      tags: ['authentication'],
    },
  })
  .listen(5000)

// Accessing /swagger would show you a Swagger UI with the generated endpoint documentation from the Elysia server.
// The detail fields follows an OpenAPI V3 definition with auto-completion and type-safety by default.
// Detail is then passed to Swagger to put the description to Swagger route.
