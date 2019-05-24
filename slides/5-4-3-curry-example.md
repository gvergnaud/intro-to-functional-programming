### Le Currying


```js
import { curry } from 'ramda';

const sumOfFour = (a, b, c, d) => a + b + c + d

sumOfFour(1)
// => NaN

const curriedSumOfFour = curry(sumOfFour)
curriedSumOfFour(1)
// => (b, c, d) => 1 + b + c + d
_
```
