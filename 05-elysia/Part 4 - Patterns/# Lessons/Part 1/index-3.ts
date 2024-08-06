/*
  Cookie
  - To use Cookie, you can extract the cookie property and access its name and value directly.
  - There's no get/set, you can extract the cookie name and retrieve or update its value directly.


*/

import { Elysia } from 'elysia'

new Elysia()
  .get('/', ({ cookie: { name } }) => {
    // Set
    name.value = 'New Value'

    // Get
    return name.value
  })
  .listen(5000)

// By default, Reactive Cookie can encode/decode type of object automatically allowing us to treat cookie as an object without worrying about the encoding/decoding. It just works.
