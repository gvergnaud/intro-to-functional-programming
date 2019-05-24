### Le Currying

Presque pas besoin :

```js

const sumOfFour = a => b => c => d => a + b + c + d

sumOfFour(1)
// => (b, c, d) => 1 + b + c + d
_
```
en ES6, les `arrow functions` facilitent la syntaxe

des functions qui retournent des functions.
