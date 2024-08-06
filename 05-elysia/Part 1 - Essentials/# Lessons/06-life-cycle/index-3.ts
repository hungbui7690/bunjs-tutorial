/*
  Order of code
  - The order of Elysia's life-cycle code is very important.
  - Elysia's life-cycle event is stored as a queue, aka first-in first-out. So Elysia will always respect the order of code from top-to-bottom followed by the order of life-cycle events.


*/

import { Elysia } from 'elysia'
import { isHtml } from '@elysiajs/html'

new Elysia()
  .onBeforeHandle(() => {
    console.log('1')
  })
  .onAfterHandle(() => {
    console.log('3')
  })
  .get('/', () => 'hi', {
    beforeHandle() {
      console.log('2')
    },
  })
  .listen(5000)
