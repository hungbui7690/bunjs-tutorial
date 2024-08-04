/*
  Custom headers


*/

// 1. To set custom headers, pass an object with the headers property set to an object.
const response = await fetch('http://example.com', {
  headers: {
    'X-Custom-Header': 'value',
  },
})

// 2. You can also set headers using the Headers object.
const headers = new Headers()
headers.append('X-Custom-Header', 'value')

const responseX = await fetch('http://example.com', {
  headers,
})
