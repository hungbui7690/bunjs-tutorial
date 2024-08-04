/*
  Streaming files


*/

// 1. To stream a file, return a Response object with a BunFile object as the body.
Bun.serve({
  fetch(req) {
    return new Response(Bun.file('./hello.txt'))
  },
})

// ⚡️ Speed — Bun automatically uses the sendfile(2) system call when possible, enabling zero-copy file transfers in the kernel—the fastest way to send files.

// 2. You can send part of a file using the slice(start, end) method on the Bun.file object. This automatically sets the Content-Range and Content-Length headers on the Response object.
Bun.serve({
  port: 5000,
  fetch(req) {
    // a. parse `Range` header
    // const [start = 0, end = Infinity] = req.headers
    // .get('Range') // Range: bytes=0-100
    // .split('=') // ["Range: bytes", "0-100"]
    // .at(-1) // "0-100"
    // .split('-') // ["0", "100"]
    // .map(Number) // [0, 100]

    // b. return a slice of the file
    // const bigFile = Bun.file('./big-video.mp4')
    // return new Response(bigFile.slice(start, end))

    return new Response('Hello World!')
  },
})
