/*
  HTTP client
  - Bun implements the WHATWG fetch standard, with some extensions to meet the needs of server-side JavaScript.
  - Bun also implements node:http, but fetch is generally recommended instead.


******************************

  # Sending an HTTP request


*/

// 1. To send an HTTP request, use fetch
const response = await fetch('http://example.com')
console.log(response.status) // => 200
const text = await response.text() // or response.json(), response.formData(), etc.

// 2. You can also pass fetch a Request object.
const request = new Request('http://example.com', {
  method: 'POST',
  // body can be a string, a FormData object, an ArrayBuffer, a Blob, and more. See the MDN documentation for more information.
  // https://developer.mozilla.org/en-US/docs/Web/API/Response/body
  body: 'Hello, world!',
})
const responseX = await fetch(request)

// 3. Proxying requests
// To proxy a request, pass an object with the proxy property set to a URL.
const responseY = await fetch('http://example.com', {
  proxy: 'http://proxy.com',
})
