/*
  redirect
  - Redirect a request to another resource.


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', ({ redirect }) => {
    return redirect('https://youtu.be/whpVWVWBW4U?&t=8')
  })
  .get('/custom-status', ({ redirect }) => {
    // You can also set custom status to redirect
    return redirect('https://youtu.be/whpVWVWBW4U?&t=8', 302)
  })
  .listen(5000)

// When using redirect, returned value is not required and will be ignored. As response will be from another resource.
