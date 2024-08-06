/*
  Interceptor Hook
  - Register hook into every handler of the current instance that came after.
  - To add an interceptor hook, you can use .on followed by a life cycle event in camelCase:


*/

import { Elysia } from 'elysia'
import { isHtml } from '@elysiajs/html'

new Elysia()
  .get('/none', () => '<h1>Hello World</h1>')
  .onAfterHandle(({ response, set }) => {
    if (isHtml(response))
      set.headers['Content-Type'] = 'text/html; charset=utf8'
  })
  .get('/', () => '<h1>Hello World</h1>')
  .get('/hi', () => '<h1>Hello World</h1>')
  .listen(5000)

/*
    /     ->	text/html; charset=utf8
    /hi	  ->  text/html; charset=utf8
    /none	->  text/plain; charset=utf8

  - Events from other plugins are also applied to the route so the order of code is important.
*/
