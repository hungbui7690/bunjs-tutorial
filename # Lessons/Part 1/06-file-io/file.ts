const data = 'I love Javascript'

//////////////////////
// write file
await Bun.write('output.txt', data)

//////////////////////
// read file
const file = await Bun.file('output.txt')
console.log(await file.text())
console.log(await file.size)

//////////////////////
// Stream
console.log(await file.stream()) // return ReadableStream
console.log(await file.arrayBuffer()) // return Buffer
