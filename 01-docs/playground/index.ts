/*
  File I/O
  - Note — The Bun.file and Bun.write APIs documented on this page are heavily optimized and represent the recommended way to perform file-system tasks using Bun. For operations that are not yet available with Bun.file, such as mkdir or readdir, you can use Bun's nearly complete implementation of the node:fs module.
  - Bun provides a set of optimized APIs for reading and writing files.


*/

// Create a BunFile instance with the Bun.file(path) function. A BunFile represents a lazily-loaded file; initializing it does not actually read the file from disk.
const foo = Bun.file('foo.txt') // relative to cwd
foo.size // number of bytes
foo.type // MIME type

// The reference conforms to the Blob interface, so the contents can be read in various formats.
await foo.text() // contents as a string
await foo.stream() // contents as ReadableStream
await foo.arrayBuffer() // contents as ArrayBuffer
await foo.bytes() // contents as Uint8Array

// File references can also be created using numerical file descriptors or file:// URLs.
Bun.file(1234)
Bun.file(new URL(import.meta.url)) // reference to the current file

// A BunFile can point to a location on disk where a file does not exist.
const notreal = Bun.file('notreal.txt')
notreal.size // 0
notreal.type // "text/plain;charset=utf-8"
const exists = await notreal.exists() // false

// The default MIME type is text/plain;charset=utf-8, but it can be overridden by passing a second argument to Bun.file.
const noreal = Bun.file('notreal.json', { type: 'application/json' })
noreal.type // => "application/json;charset=utf-8"
