/*
  Contextual data
  - Contextual data can be attached to a new WebSocket in the .upgrade() call. This data is made available on the ws.data property inside the WebSocket handlers.


*/

type WebSocketData = {
  createdAt: number
  channelId: string
  authToken: string
}

// TypeScript: specify the type of `data`
Bun.serve<WebSocketData>({
  fetch(req, server) {
    // use a library to parse cookies
    const cookies = parseCookies(req.headers.get('Cookie'))
    server.upgrade(req, {
      // this object must conform to WebSocketData
      data: {
        createdAt: Date.now(),
        channelId: new URL(req.url).searchParams.get('channelId'),
        authToken: cookies['X-Token'],
      },
    })

    return undefined
  },
  websocket: {
    // handler called when a message is received
    async message(ws, message) {
      const user = getUserFromToken(ws.data.authToken)

      await saveMessageToDatabase({
        channel: ws.data.channelId,
        message: String(message),
        userId: user.id,
      })
    },
  },
})

// To connect to this server from the browser, create a new WebSocket.
// browser.js
const socket = new WebSocket('ws://localhost:3000/chat')
socket.addEventListener('message', (event) => {
  console.log(event.data)
})
