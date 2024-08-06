/*
  Cookie Signature
  - And lastly, with an introduction of Cookie Schema, and t.Cookie type. We are able to create a unified type for handling sign/verify cookie signature automatically.
  - Cookie signature is a cryptographic hash appended to a cookie's value, generated using a secret key and the content of the cookie to enhance security by adding a signature to the cookie.
  - This make sure that the cookie value is not modified by malicious actor, helps in verifying the authenticity and integrity of the cookie data.


**************************

  Using Cookie Signature
  - By provide a cookie secret, and sign property to indicate which cookie should have a signature verification.


*/

import { Elysia, t } from 'elysia'

new Elysia()
  .get(
    '/',
    ({ cookie: { profile } }) => {
      profile.value = {
        id: 617,
        name: 'Summoning 101',
      }
    },
    {
      cookie: t.Cookie(
        {
          profile: t.Object({
            id: t.Numeric(),
            name: t.String(),
          }),
        },
        {
          secrets: 'W#%$GGSAf23@R^&',
          sign: ['profile'],
        }
      ),
    }
  )
  .listen(5000)

// Elysia then sign and un-sign cookie value automatically.
