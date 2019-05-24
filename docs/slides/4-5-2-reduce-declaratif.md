#### Accumuler un tableau

Déclaratif : la méthode **reduce()**

```js
const sum = numbers.reduce((acc, num) => acc + num, 0)

console.log(sum)
// => 68
```

OU

```js
const sum = reduce((acc, num) => acc + num, 0, numbers)

console.log(sum)
// => 68
```
