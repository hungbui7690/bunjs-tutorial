/*
  404
  - If no path matches the defined routes, Elysia will pass the request to error life cycle before returning a "NOT_FOUND" with an HTTP status of 404.
  - When navigating to your web server, you should see the result as follows:

      Path	Method	Result
      /	    GET	    hi
      /	    POST	  Route not found 😥
      /hi	  GET	    Route not found 😥

*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'hi')

  // We can handle a custom 404 error by returning a value from 'error` life cycle like this:
  .onError(({ code }) => {
    if (code === 'NOT_FOUND') return 'Route not found 😥'
  })
  .listen(5000)
