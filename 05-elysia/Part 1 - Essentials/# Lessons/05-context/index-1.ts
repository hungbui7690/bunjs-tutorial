/*
  Context
  - Context is a request information passed to a route handler.
  - Context is unique for each request, and is not shared except for store which is a global mutable state.

  - Elysia context consists of:

      path - Pathname of the request
      body - HTTP message, form or file upload.
      query - Query String, include additional parameters for search query as JavaScript Object. (Query is extracted from a value after pathname starting from '?' question mark sign)
      params - Elysia's path parameters parsed as JavaScript object
      headers - HTTP Header, additional information about the request like User-Agent, Content-Type, Cache Hint.
      request - Web Standard Request
      redirect - A function to redirect a response
      store - A global mutable store for Elysia instance
      cookie - A global mutable signal store for interacting with Cookie (including get/set)
      set - Property to apply to Response:
      status - HTTP status, defaults to 200 if not set.
      headers - Response headers
      redirect - Response as a path to redirect to
      error - A function to return custom status code


****************************

  Extending context
  - As Elysia only provides essential information, we can customize Context for our specific need for instance:
      extracting user ID as variable
      inject a common pattern repository
      add a database connection


****************************

  - We can extend Elysia's context by using the following APIs to customize the Context:
      state - Create a global mutable state into Context.store
      decorate - Add additional function or property assigned to Context
      derive / resolve - Additional property based on existing property, uniquely assigned to each request.
      TIP

  - It's recommended to assign properties related to request and response, or frequently used functions to Context for separation of concerns.


****************************

  Store
  - State is a global mutable object or state shared across the Elysia app.
  - If we are familiar with frontend libraries like React, Vue, or Svelte, there's a concept of Global State Management, which is also partially implemented in Elysia via state and store.
  - store is a representation of a single-source-of-truth global mutable object for the entire Elysia app.
  - state is a function to assign an initial value to store, which could be mutated later.


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .state('version', 1)
  .get('/a', ({ store: { version } }) => version)
  .get('/b', ({ store }) => store)
  .get('/c', () => 'still ok')
  .listen(5000)
