```js
const name = 'Kevin'

const averageAge = users
  .filter(user => user.name === name)
  .map(user => user.age)
  .reduce((acc, age, _, ages) => acc + age / ages.length, 0)
```

Et maintenant ?
