```js
// users :: [ { name :: String, age :: Int } ]

const name = 'Kevin'
let averageAge = 0
let filteredUsers = []

for (let i = 0; i < users.length; i++) {
  const user = users[i]
  if (user.name === name) filteredUsers.push(user)
}

for (let j = 0; j < filteredUsers.length; j++) {
  const user = filteredUsers[j]
  averageAge = averageAge + user.age / filteredUsers.length
}
```


Qu'est ce que ça fait en un coup d'oeil ?
