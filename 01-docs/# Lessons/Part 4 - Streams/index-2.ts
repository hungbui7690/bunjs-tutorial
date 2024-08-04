/*
  Direct ReadableStream
  - Bun implements an optimized version of ReadableStream that avoid unnecessary data copying & queue management logic. With a traditional ReadableStream, chunks of data are enqueued. Each chunk is copied into a queue, where it sits until the stream is ready to send more data.


*/

// With a direct ReadableStream, chunks of data are written directly to the stream. No queueing happens, and there's no need to clone the chunk data into memory. The controller API is updated to reflect this; instead of .enqueue() you call .write.
const stream = new ReadableStream({
  type: 'direct',
  pull(controller) {
    controller.write('hello')
    controller.write('world')
  },
})

// When using a direct ReadableStream, all chunk queueing is handled by the destination. The consumer of the stream receives exactly what is passed to controller.write(), without any encoding or modification.
