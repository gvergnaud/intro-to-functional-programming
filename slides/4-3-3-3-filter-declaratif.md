####  Filtrer un tableau

Déclaratif :


```js
const oldUsers = filter(user => user.age > 30, users)

console.log(oldUsers)
// => [{ age: 31 }]
```

On va **décrire** le comportement du programme

plutôt que de dire ce qu'il se passe

à chaque étape de la boucle.

Mais ou est donc définie la function filter ?
