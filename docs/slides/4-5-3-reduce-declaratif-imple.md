#### Accumuler un tableau

Implémentation de reduce

```js
function reduce(reducer, seed, xs) {
  let out = seed
  for (let i = 0; i < xs.length; i++) {
    out = reducer(out, xs[i])
  }
  return out
}
```

Ou avec recursion

```js
const reduce = (f, acc, [x, ...rest]) =>
  rest.length ? reduce(f, f(acc, x), rest) : f(acc, x)
```
