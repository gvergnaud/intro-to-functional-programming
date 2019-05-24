### Flow d'un code functional

```

    SideEffect -> Pure -> SideEffect
_
```

Pousser les side effects aux bords de notre code.

Note:

Demo ->
```js
getData().then(app)

const app = compose(
  render
  map(etc)
)

```
