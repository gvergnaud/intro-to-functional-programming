#### une fonction pure

n'altère pas les paramètres qui lui sont passés


```js
// Pure
const addValue = (arr, v) => arr.concat(v)
addValue([1, 2, 3], 4)
// => [1, 2, 3, 4]


// Impure
const addValue = (arr, v) => {
  arr.push(v)
}

let myArray = [1, 2, 3]
addValue(myArray, 4)
// => undefined
// myArray === [1, 2, 3, 4]

```
