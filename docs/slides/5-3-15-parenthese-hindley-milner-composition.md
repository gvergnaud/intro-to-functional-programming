#### Hindley-Milner Type Notation


```js
const isLengthGreaterThanTen = compose(length, isGreaterThanTen)
```

```hs
(String -> Int) + (Int -> Bool) = String -> Bool
```

donc

```hs
isLengthGreaterThanTen :: String -> Bool
```
