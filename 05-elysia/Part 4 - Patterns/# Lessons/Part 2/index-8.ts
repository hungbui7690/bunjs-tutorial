/*
  Using Tags
  - Elysia can separate the endpoints into groups by using the Swaggers tag system


*/

import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(
    // Firstly define the available tags in the swagger config object
    swagger({
      documentation: {
        tags: [
          { name: 'App', description: 'General endpoints' },
          { name: 'Auth', description: 'Authentication endpoints' },
        ],
      },
    })
  )
  .get('/', () => 'hello')

  // Then use the details property of the endpoint configuration section to assign that endpoint to the group
  .get('/greeting', () => 'greeting', {
    detail: {
      tags: ['Auth'],
    },
  })
  .listen(5000)
