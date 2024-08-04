/*
  TLS
  - a protocol to protect website -> website starts with "https://"


*/

// 1. Bun supports TLS out of the box, powered by BoringSSL. Enable TLS by passing in a value for key and cert; both are required to enable TLS.
Bun.serve({
  fetch(req) {
    return new Response('Hello!!!')
  },

  tls: {
    key: Bun.file('./key.pem'),
    cert: Bun.file('./cert.pem'),
  },
})

// 2. The key and cert fields expect the contents of your TLS key and certificate, not a path to it. This can be a string, BunFile, TypedArray, or Buffer.
Bun.serve({
  fetch(req) {
    return new Response('Hello!!!')
  },

  tls: {
    // BunFile
    key: Bun.file('./key.pem'),
    // Buffer
    // key: fs.readFileSync('./key.pem'),
    // string
    // key: fs.readFileSync('./key.pem', 'utf8'),
    // array of above
    // key: [Bun.file('./key1.pem'), Bun.file('./key2.pem')],
  },
})

// 3. If your private key is encrypted with a passphrase, provide a value for passphrase to decrypt it.
Bun.serve({
  fetch(req) {
    return new Response('Hello!!!')
  },

  tls: {
    key: Bun.file('./key.pem'),
    cert: Bun.file('./cert.pem'),
    passphrase: 'my-secret-passphrase',
  },
})

// 4. Optionally, you can override the trusted CA certificates by passing a value for ca. By default, the server will trust the list of well-known CAs curated by Mozilla. When ca is specified, the Mozilla list is overwritten.
Bun.serve({
  fetch(req) {
    return new Response('Hello!!!')
  },
  tls: {
    key: Bun.file('./key.pem'), // path to TLS key
    cert: Bun.file('./cert.pem'), // path to TLS cert
    ca: Bun.file('./ca.pem'), // path to root CA certificate
  },
})

// 5. To override Diffie-Hellman parameters:
Bun.serve({
  fetch(req) {
    return new Response('Hello!!!')
  },
  tls: {
    // other config
    dhParamsFile: '/path/to/dhparams.pem', // path to Diffie Hellman parameters
  },
})

// 6. Sever name indication (SNI)
// To configure the server name indication (SNI) for the server, set the serverName field in the tls object.
Bun.serve({
  fetch(req) {
    return new Response('Hello!!!')
  },
  tls: {
    // ... other config
    serverName: 'my-server.com', // SNI
  },
})

// 7. To allow multiple server names, pass an array of objects to tls, each with a serverName field.
Bun.serve({
  fetch(req) {
    return new Response('Hello!!!')
  },
  tls: [
    {
      key: Bun.file('./key1.pem'),
      cert: Bun.file('./cert1.pem'),
      serverName: 'my-server1.com',
    },
    {
      key: Bun.file('./key2.pem'),
      cert: Bun.file('./cert2.pem'),
      serverName: 'my-server2.com',
    },
  ],
})
