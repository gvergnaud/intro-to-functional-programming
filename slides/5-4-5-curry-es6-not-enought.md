### Le Currying

Mais la function `curry` nous permet de passer

aussi plusieurs paramètres d'un coup si on veut :

```js

const sumOfFour = curry((a, b, c, d) => a + b + c + d)

sumOfFour(1, 2)
// => (c, d) => 1 + 2 + c + d

const sumOfFour = a => b => c => d => a + b + c + d

sumOfFour(1, 2)
// => (b, c, d) => 1 + b + c + d
// :(
_
```
