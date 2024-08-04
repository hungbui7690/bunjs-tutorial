/*
  TLS


*/

// 1. To use a client certificate, use the tls option:
await fetch('https://example.com', {
  tls: {
    key: Bun.file('/path/to/key.pem'),
    cert: Bun.file('/path/to/cert.pem'),
    // ca: [Bun.file("/path/to/ca.pem")],
  },
})

// 2. Custom TLS Validation
// To customize the TLS validation, use the checkServerIdentity option in tls
await fetch('https://example.com', {
  tls: {
    checkServerIdentity: (hostname, peerCertificate) => {
      // Return an error if the certificate is invalid
    },
  },
})

// This is similar to how it works in Node's net module.
