####  Transformer un tableau

Déclaratif : la méthode **map()**

```js
const userAges = users.map(user => user.age)
console.log(userAges)
// => [20, 31, 17]
```

OU

```js
const userAges = map(user => user.age, users)

console.log(userAges)
// => [20, 31, 17]
```
