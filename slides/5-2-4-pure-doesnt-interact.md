#### une fonction pure

n'intéragit pas avec le scope dans lequel elle se trouve

```js
const number = 3

// Pure
const isOdd = x => !(x % 2)
isOdd(number)
// => true

// Impure
const isOdd = () => !(number % 2)
isOdd()
// => true

```
