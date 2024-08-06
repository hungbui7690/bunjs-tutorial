/*
  Scope level
  - Elysia has 3 levels of scope as the following: Scope type are as the following:
    + local (default) - apply to only current instance and descendant only
    + scoped - apply to parent, current instance and descendants
    + global - apply to all instance that apply the plugin (all parents, current, and descendants)

  - Let's review what each scope type does by using the following example:


*/

import { Elysia } from 'elysia'

// 1. Value base on table value provided below
const type = 'local'

const child = new Elysia().get('/child', () => 'hi')

const current = new Elysia()
  // 2. as: type
  .onBeforeHandle({ as: type }, () => {
    console.log('hi')
  })
  .use(child)
  .get('/current', () => 'hi')

const parent = new Elysia().use(current).get('/parent', () => 'hi')

const main = new Elysia().use(parent).get('/main', () => 'hi')

/*
  - By changing the type value, the result should be as follows:

    type	    child	  current   parent	main
    'local'	  ✅      ✅	      ❌	    ❌
    'scoped'	✅      ✅	      ✅	    ❌
    'global'	✅      ✅	      ✅	    ✅

*/
