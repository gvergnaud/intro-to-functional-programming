**Le déclaratif est construit sur de l’impératif.**

```js
function filter(predicate, xs) {
	let out = []
	for (let i = 0; i < xs.length; i++) {
		if (predicate(xs[i])) out.push(xs[i])
	}
	return out
}
```


filter est ce qu'on appelle une **Higher Order Function**
