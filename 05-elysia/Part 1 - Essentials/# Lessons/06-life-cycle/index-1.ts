/*
  Life Cycle
  - Also known as <middleware> with name in Express or <Hook> in Fastify.
  
  - Imagine we want to return a text of HTML.
  - We need to set "Content-Type" headers as "text/html" to for browser to render HTML.
  - Explicitly specifying that response is HTML could be repetitive if there are a lot of handlers, says ~200 endpoints.
  - We can see a duplicated code for just specifying that response is HTML.

  - But what if after we sent a response, we could detect if a response is an HTML string then append headers automatically?
  - That's when the concept of Life Cycle comes into play.


**************************

  - Life Cycle allows us to intercept important events, and customize the behavior of Elysia, like adding an HTML header automatically.
  - Elysia's Life Cycle event can be illustrated as the following -> pic
  - You don't have to understand/memorize all of the events in one go, we will be covering each on the next chapter.


**************************

  Events
  - Most of the events you are going to use are highlighted in the blue area but to summarize:
  - Elysia does the following for every request:

  1. Request
  - Notify when a new event is received, providing only the most minimal context to reduce overhead
  - Best for:
    + Caching
    + Analytics

  2. Parse
  - Parse -  body and add to Context.body
  - Best for:
    + Providing custom body-parser

  3. Transform
  - Modify Context before validation
  - Best for:
    + Mutate existing context to conform with validation.
    + Adding new context (derive this)

  4. Validation (not interceptable)
  - Strictly validate incoming request provided by Elysia.t

  5. Before Handle
  - Custom validation before route handler
  - If value is returned, route handler will be skipped
  - Best for:
    + Providing custom requirements to access route, eg. user session, authorization.


  6. Handle (Route Handler)
  - A callback function of each route

  7. After Handle
  - Map returned value into a response
  - Best for:
    + Add custom headers or transform the value into a new response

  8. Error
  - Capture error when thrown
  - Best for:
    + Provide a custom error response
    + Catching error response

  9. After Response
  - Executed after response sent to the client
  - Best for:
    + Cleaning up response
    + Analytics

  - These events are designed to help you decouple code into smaller reusable pieces instead of having long, repetitive code in a handler.


**************************

  Hook
  - We refer to each function that intercepts the life cycle event as "hook", as the function hooks into the lifecycle event.
  - Hooks can be categorized into 2 types:
    + Local Hook: Execute on a specific route
    + Interceptor Hook: Execute on every route

  - TIP: The hook will accept the same Context as a handler, you can imagine adding a route handler but at a specific point.


**************************

  Local Hook
  - The local hook is executed on a specific route.
  - To use a local hook, you can inline hook into a route handler:

    ~~ bun add @elysiajs/html


*/

import { Elysia } from 'elysia'
import { isHtml } from '@elysiajs/html'

new Elysia()
  .get('/', () => '<h1>Hello World</h1>', {
    afterHandle({ response, set }) {
      if (isHtml(response))
        set.headers['Content-Type'] = 'text/html; charset=utf8'
    },
  })
  .get('/hi', () => '<h1>Hello World</h1>')
  .listen(5000)

/*
    /	  -> text/html; charset=utf8
    /hi -> text/plain; charset=utf8
*/
