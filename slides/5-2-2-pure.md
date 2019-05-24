#### une fonction pure

prend des paramètres et retourne un résultat

```js
// Pure
const add = (a, b) => a + b
add(2, 2)
// => 4

// Impure
const add = (a, b, cb) => {
  cb(a + b)
}
add(2, 2, v => console.log(v))
// => undefined
// "4"
```
