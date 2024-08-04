/*
  Pub/Sub
  - Bun's ServerWebSocket implementation implements a native publish-subscribe API for topic-based broadcasting. Individual sockets can .subscribe() to a topic (specified with a string identifier) and .publish() messages to all other subscribers to that topic (excluding itself). This topic-based broadcast API is similar to MQTT and Redis Pub/Sub.


*/

const server = Bun.serve<{ username: string }>({
  fetch(req, server) {
    const url = new URL(req.url)
    if (url.pathname === '/chat') {
      console.log(`upgrade!`)
      const username = getUsernameFromReq(req)
      const success = server.upgrade(req, { data: { username } })
      return success
        ? undefined
        : new Response('WebSocket upgrade error', { status: 400 })
    }

    return new Response('Hello world')
  },
  websocket: {
    open(ws) {
      const msg = `${ws.data.username} has entered the chat`
      ws.subscribe('the-group-chat')
      server.publish('the-group-chat', msg)
    },
    message(ws, message) {
      // this is a group chat
      // so the server re-broadcasts incoming message to everyone
      server.publish('the-group-chat', `${ws.data.username}: ${message}`)
    },
    close(ws) {
      const msg = `${ws.data.username} has left the chat`
      ws.unsubscribe('the-group-chat')
      server.publish('the-group-chat', msg)
    },
  },
})

// Calling .publish(data) will send the message to all subscribers of a topic except the socket that called .publish(). To send a message to all subscribers of a topic, use the .publish() method on the Server instance.
server.publish('the-group-chat', 'Hello world')

console.log(`Listening on ${server.hostname}:${server.port}`)
