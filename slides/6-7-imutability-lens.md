#### Des données immutables

### Les lens

Une api plus friendly pour faire de l'immutable.


3 méthodes : `view`, `over` et `set`.
```js
// view :: Lens -> DataStructure -> a
view(lens, dataStructure)

// over :: Lens -> (a -> a) -> DataStructure -> DataStructure
over(lens, mapper, dataStructure)

// set :: Lens -> a -> DataStructure -> DataStructure
set(lens, value, dataStructure)
_
```
