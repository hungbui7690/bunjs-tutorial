import path from 'path' // similar to NodeJS, Bun also has these packages

const filepath = path.join('foo', 'bar', 'img.png')
const filename = path.basename(filepath)
console.log(filename)
