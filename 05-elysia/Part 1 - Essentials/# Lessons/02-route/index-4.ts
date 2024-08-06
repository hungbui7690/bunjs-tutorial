/*
  Elysia.all
  - Elysia provides an Elysia.all for handling any HTTP method for a specified path using the same API like Elysia.get and Elysia.post
  - Any HTTP method that matches the path, will be handled as follows:

    Path	Method	  Result
    /	    GET	      hi
    /	    POST	    hi
    /	    DELETE	  hi


*/

import { Elysia } from 'elysia'

const app = new Elysia().all('/', () => 'hi').listen(5000)
