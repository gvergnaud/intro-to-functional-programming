#### Hindley-Milner Type Notation


```js
const isLengthGreaterThanTen = compose(length, greeting)
```

```
(String -> Int) + (Int -> Bool) = String -> Bool
```

donc

```
isLengthGreaterThanTen :: String -> Bool
```
