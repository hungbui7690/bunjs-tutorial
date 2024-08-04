/*
  Streams
  - Streams are an important abstraction for working with binary data without loading it all into memory at once. They are commonly used for reading and writing files, sending and receiving network requests, and processing large amounts of data.

  - Bun implements the Web APIs ReadableStream and WritableStream.


*/

// To create a simple ReadableStream:
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue('hello')
    controller.enqueue('world')
    controller.close()
  },
})

// The contents of a ReadableStream can be read chunk-by-chunk with for await syntax.
for await (const chunk of stream) {
  console.log(chunk)
  // => "hello"
  // => "world"
}
