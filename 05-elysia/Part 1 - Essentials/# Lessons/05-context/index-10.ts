/*
  Reference and value
  - To mutate the state, it's recommended to use reference to mutate rather than using an actual value.



*/

const store = {
  counter: 0,
}

// When accessing the property from JavaScript, if we define a primitive value from an object property as a new value, the reference is lost, the value is treated as new separate value instead.
store.counter++
console.log(store.counter) // ✅ 1

// However, if we define a counter as a new value
let counter = store.counter

counter++
console.log(store.counter) // ❌ 1 -> link is missing
console.log(counter) // ✅ 2

// Once a primitive value is redefined as a new variable, the reference "link" will be missing, causing unexpected behavior.
