/*
  Wildcards
  - Dynamic paths allow capturing certain segments of the URL.
  - However, when you need a value of the path to be more dynamic and want to capture the rest of the URL segment, a wildcard can be used.
  - Wildcards can capture the value after segment regardless of amount by using "*".

  => Wildcards are useful for capturing a path until a specific point.


*/

import { Elysia } from 'elysia'

const app = new Elysia().get('/id/*', ({ params }) => params['*']).listen(5000)

/*
  The server will respond as follows:

    Path	                  Response
    /id/1	                  1
    /id/123	                123
    /id/anything	          anything
    /id/anything?name=salt	anything
    /id                   	Not Found
    /id/anything/rest	      anything/rest

*/
