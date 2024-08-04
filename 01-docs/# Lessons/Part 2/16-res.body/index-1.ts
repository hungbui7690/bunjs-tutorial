/*
  Response bodies
  - To read the response body, use one of the following methods:

      response.text(): Promise<string>: Returns a promise that resolves with the response body as a string.
      response.json(): Promise<any>: Returns a promise that resolves with the response body as a JSON object.
      response.formData(): Promise<FormData>: Returns a promise that resolves with the response body as a FormData object.
      response.bytes(): Promise<Uint8Array>: Returns a promise that resolves with the response body as a Uint8Array.
      response.arrayBuffer(): Promise<ArrayBuffer>: Returns a promise that resolves with the response body as an ArrayBuffer.
      response.blob(): Promise<Blob>: Returns a promise that resolves with the response body as a Blob.


*/

// 1. Streaming response bodies
// You can use async iterators to stream the response body.
const response = await fetch('http://example.com')

for await (const chunk of response.body) {
  console.log(chunk)
}

// 2. You can also more directly access the ReadableStream object.
const stream = response.body

const reader = stream.getReader()
const { value, done } = await reader.read()
