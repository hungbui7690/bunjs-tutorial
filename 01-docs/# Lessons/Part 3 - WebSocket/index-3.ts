/*
  Headers
  - Once the upgrade succeeds, Bun will send a 101 Switching Protocols response per the spec. Additional headers can be attached to this Response in the call to server.upgrade().


*/

const crypto = require('crypto')

// 1.
const generateSessionId = function () {
  // 16 bytes is likely to be more than enough,
  // but you may tweak it to your needs
  return crypto.randomBytes(16).toString('base64')
}

// 2.
Bun.serve({
  fetch(req, server) {
    const sessionId = generateSessionId()
    server.upgrade(req, {
      headers: {
        'Set-Cookie': `SessionId=${sessionId}`,
      },
    })
  },
  websocket: {
    message(ws, message) {
      ws.send(message)
    },
  },
})
