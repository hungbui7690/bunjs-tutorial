/*
  Unix domain sockets

*/

// To listen on a unix domain socket, pass the unix option with the path to the socket.
Bun.serve({
  unix: '/tmp/my-socket.sock', // path to socket
  fetch(req) {
    return new Response(`404!`)
  },
})

// Abstract namespace sockets
// Bun supports Linux abstract namespace sockets. To use an abstract namespace socket, prefix the unix path with a null byte.
Bun.serve({
  unix: '\0my-abstract-socket', // abstract namespace socket
  fetch(req) {
    return new Response(`404!`)
  },
})
// Unlike unix domain sockets, abstract namespace sockets are not bound to the filesystem and are automatically removed when the last reference to the socket is closed.
