/*
  Cookie Rotation
  - Elysia handle Cookie's secret rotation automatically.
  - Cookie Rotation is a migration technique to sign a cookie with a newer secret, while also be able to verify the old signature of the cookie.


********************************

  Config
  - Below is a cookie config accepted by Elysia.

  # secret
  The secret key for signing/un-signing cookies.
  If an array is passed, will use Key Rotation.
  Key rotation is when an encryption key is retired and replaced by generating a new cryptographic key.
  Below is a config that extends from cookie

  #domain
  Specifies the value for the Domain Set-Cookie attribute.
  By default, no domain is set, and most clients will consider the cookie to apply to only the current domain.

  #encode
  @default encodeURIComponent
  Specifies a function that will be used to encode a cookie's value.
  Since the value of a cookie has a limited character set (and must be a simple string), this function can be used to encode a value into a string suited for a cookie's value.
  The default function is the global encodeURIComponent, which will encode a JavaScript string into UTF-8 byte sequences and then URL-encode any that fall outside of the cookie range.

  # expires
  Specifies the Date object to be the value for the Expires Set-Cookie attribute.
  By default, no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete it on a condition like exiting a web browser application.

  TIP -> The cookie storage model specification states that if both expires and maxAge are set, then maxAge takes precedence, but not all clients may obey this, so if both are set, they should point to the same date and time.

  # httpOnly
  @default false
  Specifies the boolean value for the HttpOnly Set-Cookie attribute.
  When truthy, the HttpOnly attribute is set, otherwise, it is not.
  By default, the HttpOnly attribute is not set.

  TIP -> be careful when setting this to true, as compliant clients will not allow client-side JavaScript to see the cookie in document.cookie.

  # maxAge
  @default undefined
  Specifies the number (in seconds) to be the value for the Max-Age Set-Cookie attribute.
  The given number will be converted to an integer by rounding down. By default, no maximum age is set.

  TIP -> The cookie storage model specification states that if both expires and maxAge are set, then maxAge takes precedence, but not all clients may obey this, so if both are set, they should point to the same date and time.

  # path 
  Specifies the value for the Path Set-Cookie attribute.
  By default, the path handler is considered the default path.

  # priority
  Specifies the string to be the value for the Priority Set-Cookie attribute. low will set the Priority attribute to Low. medium will set the Priority attribute to Medium, the default priority when not set. high will set the Priority attribute to High.
  More information about the different priority levels can be found in the specification.

  TIP -> This is an attribute that has not yet been fully standardized and may change in the future. This also means many clients may ignore this attribute until they understand it.

  # sameSite
  Specifies the boolean or string to be the value for the SameSite Set-Cookie attribute. true will set the SameSite attribute to Strict for strict same-site enforcement. false will not set the SameSite attribute. 'lax' will set the SameSite attribute to Lax for lax same-site enforcement. 'none' will set the SameSite attribute to None for an explicit cross-site cookie. 'strict' will set the SameSite attribute to Strict for strict same-site enforcement. More information about the different enforcement levels can be found in the specification.

  TIP -> This is an attribute that has not yet been fully standardized and may change in the future. This also means many clients may ignore this attribute until they understand it.

  # secure
  Specifies the boolean value for the Secure Set-Cookie attribute. When truthy, the Secure attribute is set, otherwise, it is not. By default, the Secure attribute is not set.

  TIP -> Be careful when setting this to true, as compliant clients will not send the cookie back to the server in the future if the browser does not have an HTTPS connection.

*/

import { Elysia, t } from 'elysia'

new Elysia({
  cookie: {
    secrets: ['secret'],
  },
}).listen(5000)
