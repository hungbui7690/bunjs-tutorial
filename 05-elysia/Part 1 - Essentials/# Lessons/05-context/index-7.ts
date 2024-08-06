/*
  Pattern

**********************

  # Remap
  - Remap is a function reassignment.
  - Allowing us to create a new value from existing value like renaming or removing a property.
  - By providing a function, and returning an entirely new object to reassign the value.


*/

import { Elysia } from 'elysia'

class Logger {
  log(value: string) {
    console.log(value)
  }
}
class Trace {}
class Telemetry {}

// Assigning multiple properties is better contained in an object for a single assignment.
const app = new Elysia()
  .state('counter', 0)
  .state('version', 1)
  .state(({ version, ...store }) => ({
    ...store,
    elysiaVersion: 1,
  }))

  // ✅ Create from state remap
  .get('/elysia-version', ({ store }) => store.elysiaVersion)

  // ❌ Excluded from state remap
  .get('/version', ({ store }) => store.version)
  .listen(5000)

/*
  - It's a good idea to use state remap to create a new initial value from the existing value.
  - However, it's important to note that Elysia doesn't offer reactivity from this approach, as remap only assigns an initial value.

  TIP
  - Using remap, Elysia will treat a returned object as a new property, removing any property that is missing from the object.

*/
