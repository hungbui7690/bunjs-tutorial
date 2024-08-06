/*
  Constructor
  - You can use the Elysia constructor to set the behavior for unknown fields on outgoing and incoming bodies via the normalize option. By default, elysia will raise an error in case a request or response contains fields which are not explicitly allowed in the schema of the respective handler. You can change this by setting normalize to true when constructing your elysia instance.


*/

import { Elysia, t } from 'elysia'

new Elysia({
  normalize: true,
})
