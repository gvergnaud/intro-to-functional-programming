#### Des données immutables

Comment éviter de mutter un tableau ?

ne **pas** utiliser `push()`

```js

  const immutablePush = (x, xs) => xs.concat(x)
  // OU
  const immutablePush = (x, xs) => [ ...xs, x]
_
```
modifier un item :
```js

  const immutableSetAtIndex = (index, value, xs) => [
    ...xs.slice(0, index),
    value,
    ...xs.slice(index + 1)
  ]
_
```
