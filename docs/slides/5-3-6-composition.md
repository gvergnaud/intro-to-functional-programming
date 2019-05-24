#### Je m'explique

L'idée est de connecter les functions entre elles

en passant le resultat d'un fonction en paramètre à la suivante.

```js
import { compose } from 'ramda';

const double = x => x * 2
const tripple = x => x * 3

// composition ->

const sixtuple = compose(double, tripple)

console.log(sixtuple(7))
// 42

```
