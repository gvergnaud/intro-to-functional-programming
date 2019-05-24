#### Hindley-Milner Type Notation

C'est très pratique pour composer des functions.

```hs
length :: String -> Int
const length = str => str.length

isGreaterThanTen :: Int -> Bool
const isGreaterThanTen = x => x > 10
```

quel sera la signature de

```js
compose(isGreaterThanTen, length)
```
?
