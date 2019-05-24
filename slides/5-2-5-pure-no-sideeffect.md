#### une fonction pure

n'a pas d'effet de bord


```js
// Impure
const getUsers = (callback) => {
  fetch(`/user`).then(callback)
}
```
