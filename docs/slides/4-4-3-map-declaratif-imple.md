####  Transformer un tableau

implémentation de map

```js
function map(mapper, xs) {
	let out = []
	for (let i = 0; i < xs.length; i++) {
		out.push(mapper(xs[i]))
	}
	return out
}
```

ou avec recursion
```js
const map = (f, [x, ...rest]) =>
  rest.length ? [f(x), ...map(rest)] : [f(x)]
```
