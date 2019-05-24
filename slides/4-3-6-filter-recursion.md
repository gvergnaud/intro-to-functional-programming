### Je vous ai menti
(un peu)

On peut aussi faire des boucles de manière déclarative




```js
const filter = (f, [x, ...rest]) =>
	rest.length
		? f(x) ? [x, ...filter(f, rest)] : filter(f, rest)
		: f(x) ? [x] : []
```


grâce à la recursion !
