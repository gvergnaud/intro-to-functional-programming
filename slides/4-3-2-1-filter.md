###  Filtrer un tableau

Impératif :

```js
const users = [{ age: 20 }, { age: 31 }, { age: 17 }]

let oldUsers = []
for (let i = 0; i < users.length; i++) {
	const currentUser = users[i]
	if (currentUser.age > 30) oldUsers.push(currentUser)
}

console.log(oldUsers)
// => [{ age: 31 }]
```


Oulala qu'est ce que ça micromanage


Note:

Micro management =
- déclaration de variables temporaire,
- for loops,
- if statements
