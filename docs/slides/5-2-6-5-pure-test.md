#### Ptit test


```js
const isThisPure = str => {
	const title = `AppName - ${str}`
	return () => window.title = title
}
```
