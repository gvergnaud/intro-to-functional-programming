#### Des données immutables

Comment éviter de mutter un object ?

```js

  const objectSet = (key, value, obj) =>
    Object.assign({}, obj, { [key]: value })

  // OU

  const objectSet = (key, value, obj) =>
    ({ ...obj, [key]: value })
_
```
