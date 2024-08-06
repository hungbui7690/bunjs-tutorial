/*
  Queue twoslash
  - Using derived and transform is stored in the same queue.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .onTransform(() => {
    console.log(1)
  })
  .derive(() => {
    console.log(2)

    return {}
  })
  .get('/', () => 'hello')
  .listen(5000)
