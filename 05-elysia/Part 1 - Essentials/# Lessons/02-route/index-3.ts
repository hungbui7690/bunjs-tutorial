/*
  Custom Method
  - We can accept custom HTTP Methods with Elysia.route.

  - Elysia.route accepts the following:

      method: HTTP Verb
      path: Pathname
      function: Function to response to the client
      hook: Additional metadata
      When navigating to each method, you should see the results as the following:


      Path	  Method	  Result
      /	      GET	      hello
      /users  POST	    create users
      /       M-SEARCH	connect


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'hello')
  .post('/users', () => 'create users')
  .route('M-SEARCH', '/m-search', () => 'connect')
  .listen(5000)
