/*
  Reactivity
  - The Elysia cookie is reactive. This means that when you change the cookie value, the cookie will be updated automatically based on approach like signal.
  - A single source of truth for handling cookies is provided by Elysia cookies, which have the ability to automatically set headers and sync cookie values.
  - Since cookies are Proxy-dependent objects by default, the extract value can never be undefined; instead, it will always be a value of Cookie<unknown>, which can be obtained by invoking the .value property.
  - We can treat the cookie jar as a regular object, iteration over it will only iterate over an already-existing cookie value.


**************************

  Cookie Attribute
  - To use Cookie attribute, you can either use one of the following:
    1. Setting the property directly
    2. Using set or add to update cookie property.

  - See cookie attribute config for more information.

  # Assign Property
    + You can get/set the property of a cookie like any normal object, the reactivity model synchronizes the cookie value automatically.


*/

import { Elysia } from 'elysia'

new Elysia()
  .get('/', ({ cookie: { name } }) => {
    // set
    name.domain = 'millennium.sh'
    name.httpOnly = true

    // get
    return { domain: name.domain, httpOnly: name.httpOnly }
  })
  .listen(5000)
