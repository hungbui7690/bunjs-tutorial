/*
  Path
  - A path or pathname is an identifier to locate resources of a server.

    -> http://localhost:/path/page


  - Elysia uses the path and method to look up the correct resource.
  - https://site.com:8080/path/page?p1=v1&p2=v2#hash
    + href    : full link
    + origin  : protocol://host
      -> protocol : https
      -> host     : hostname:port
        # hostname  : site.com
        # port      : 8080

    + pathname    : /path/page
    + search      : ?p1=v1&p2=v2
    + hash        : #hash

  - A path starts after the origin. Prefix with / and ends before search query (?)


*******************************

  - We can categorize the URL and path as follows:
      URL	                              Path
      http://site.com/	                /
      http://site.com/hello	            /hello
      http://site.com/hello/world	      /hello/world
      http://site.com/hello?name=salt	  /hello
      http://site.com/hello#title	      /hello


*******************************

  Dynamic path
  - URLs can be both static and dynamic.
  - Static paths are hardcoded strings that can be used to locate resources of the server, while dynamic paths match some part and captures the value to extract extra information.


*******************************

  Segment
  - URL segments are each path that is composed into a full path.
  - Segments are separated by /.

    -> http://site.com/name/salty
      + segment 1: name
      + segment 2: salty

  - Path parameters in Elysia are represented by prefixing a segment with ':' followed by a name.
    -> http://site.com/:id
      + path param name: id

  - Path parameters allow Elysia to capture a specific segment of a URL.
  - The named path parameter will then be stored in Context.params.

      Route	      Path	      Params
      /id/:id	    /id/1	      id=1
      /id/:id	    /id/hi	    id=hi
      /id/:name	  /id/hi	    name=hi



*/

import { Elysia } from 'elysia'

// For instance, we can extract the user ID from the pathname -> /id/123
const app = new Elysia().get('/id/:id', ({ params: { id } }) => id).listen(5000)

/*
  - When requested, the server should return the response as follows:

      Path	                  Response
      /id/1	                  1
      /id/123	                123
      /id/anything	          anything
      /id/anything?name=salt	anything
      /id	                    Not Found
      /id/anything/rest	      Not Found

  - Dynamic paths are great to include things like IDs, which then can be used later.
  - We refer to the named variable path as path parameter or params for short.

*/
