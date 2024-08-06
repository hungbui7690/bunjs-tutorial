/*
  Request
  - The first life-cycle event to get executed for every new request is recieved.
  - As onRequest is designed to provide only the most crucial context to reduce overhead, it is recommended to use in the following scenario:
    + Caching
    + Rate Limiter / IP/Region Lock
    + Analytic
    + Provide custom header, eg. CORS


***************************

  Pre Context
  - Context's onRequest is typed as PreContext, a minimal representation of Context with the attribute on the following: request: Request
    + set: Set
    + store
    + decorators
  
  - Context doesn't provide derived value because derive is based on onTransform event.


*************************

  ~~ bun add elysia-rate-limit
  ~~ bun add elysia-ip

  🪁 onRequest will be run before get('/')


*/

import { Elysia } from 'elysia'
import { rateLimit } from 'elysia-rate-limit'
import { ip } from 'elysia-ip'

// Below is a pseudo code to enforce rate-limit on a certain IP address.
new Elysia()
  .use(rateLimit())
  .use((app) =>
    app.derive(({ request }) => ({ ip: app.server?.requestIP(request) }))
  )
  .onRequest(({ request, set }) => {
    console.log(request.headers.get('X-Real-IP'))
    rateLimit({ duration: 1000 })
    // return 'Enhance your calm'
  })
  .get('/', ({ ip }) => {
    return ip
  })
  .listen(5000)

// If a value is returned from onRequest, it will be used as the response and the rest of the life-cycle will be skipped.
