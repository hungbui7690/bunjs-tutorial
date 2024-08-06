/*
  Summary
  - To summarize, the path in Elysia can be grouped into 3 types:
    + static paths - static string to locate the resource
    + dynamic paths - segment can be any value
    + wildcards - path until a specific point can be anything
    + You can use all of the path types together to compose a behavior for your web server.

  - The priorities are as follows:
    + static paths
    + dynamic paths
    + wildcards

  - If the path is resolved as the static wild dynamic path is presented, Elysia will resolve the static path rather than the dynamic path


*/

import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/id/1', () => 'static path')
  .get('/id/:id', () => 'dynamic path')
  .get('/id/*', () => 'wildcard path')
  .listen(5000)

/*
  The server will respond as follows:

    Path	    Response
    /id/1	    static path
    /id/2	    dynamic path
    /id/2/a	  wildcard path

*/
