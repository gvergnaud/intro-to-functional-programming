---
title: Intro To Functional Programming
theme: solarized
highlightTheme: atom-one-dark
revealOptions:
    transition: 'slide'
---

### Une petite introduction au
## Functional Programming

<p style="font-size:.7em">Slides: https://gvergnaud.github.io/intro-to-functional-programming</p>

---

## 👋

**Gabriel Vergnaud**

Héticien de la P2017

<div class="flex">
  <span>Frontend engineer at&nbsp;</span><img src="resources/logo-sketchfab.png" class="simple-image" style="width:200px" />
</div>

<div class="flex">
[@gvergnaud](https://github.com/gvergnaud)<span>&nbsp;on&nbsp;</span><img
  src="resources/logo-github.png"
  class="simple-image"
  style="width:50px;" />
</div>

<div class="flex">
[@GabrielVergnaud](https://twitter.com/GabrielVergnaud)<span>&nbsp;on&nbsp;</span><img
  src="resources/logo-twitter.png"
  class="simple-image"
  style="width:50px;" />
</div>

Note:
- Qui suis je ?
  - gabriel vergnaud
  - Heticien P2017
  - developer à Sketchfab.com (On recrute!)
  - gvergnaud on github
  - GabrielVergnaud on twitter

---


## 👀
<p class="fragment">Qui êtes vous ?</p>


Note:
- Qui etes vous ?
  - Techno utilisée ?
  - quels projets ?
  - plutot agence / produits ?
  - Dev back vs dev front ?

---

J'étais sensé vous parler de **React**...

<small class="fragment">Mais d'abord...</small>

Note:

J'ai beaucoup hésité, j'ai préparé un cours sur react au début et tout 

Mais je me suis rendu compte que pour vous parler de ce dont je dois vous parler je dois introduire
un certain nombre de concepts.

---

Un peu de ***théorie***

---

<img src="https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif" />

---

### Une petite introduction au
## Functional Programming

<p style="font-size:.7em">Slides: https://gvergnaud.github.io/intro-to-functional-programming</p>

---

##  Objectifs 🗺

- Comprendre ce qui se cache sous le terme *functional programming*
- Donner des pistes à explorer

---


<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  Pourquoi ?
</h2>


<!-- .slide: data-background="http://i.giphy.com/1M9fmo1WAFVK0.gif" -->

---

<p class="fragment">De nouveaux frameworks tous les ans</p>

<p class="fragment">Ceux des années précédentes deviennent obsolètes</p>

<p class="fragment">Que doit on apprendre qui nous serve à long terme ?</p>


---

## Solution

<p class="fragment">Arrêter de passer du temps à apprendre des **API**</p>

<p class="fragment">Mieux comprendre les fondamentaux du langage</p>

<p class="fragment">Se concentrer sur les **design patterns**</p>


---

<h3 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  MPJME - How to stay relevant as a developer
</h3>

<p style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  [https://www.youtube.com/watch?v=ZZUY37RQS-k](https://www.youtube.com/watch?v=ZZUY37RQS-k)
</p>


<!-- .slide: data-background="resources/mpjme-relevant.png" -->

---

### la promesse du functional programming


---

un code avec

### Moins de bug
parce que plus facile à comprendre

### en moins de temps
parce que plus facile à réutiliser


---

>“Developers proficient in functional programming are going to be in large demand in the very near future.”

**Eric Elliott** - [_The Two pillars of Javascript - Part 2_](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4)


---

### Quelque langage functionnels

Lisp, ML,


Haskell, Scala, Erlang, Elixir, Clojure, OCaml…


----------------

**Qui compilent en JS**

Reason, Elm, ClojureScript

----------------

**Dans une moindre mesure**

le JS


---

## Mais

on peut faire du fonctional dans *presque* tous les languages.

Ruby, Python, ..., même PHP !


---


<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  Ok mais c'est quoi ?
</h2>


<!-- .slide: data-background="http://i.giphy.com/cx5UoGpRwLra0.gif" -->

---

<p class="fragment">Préférer un style **déclaratif** à un style impératif</p>

<p class="fragment">+</p>

<p class="fragment">découper son code en petites **fonctions** réutilisables et composables.</p>

<p class="fragment">+</p>

<p class="fragment">Ne **jamais** mutter les données</p>


Note:
Ça permet de monter facilement en abstraction et d’arreter de tout micro manager.


---

## I
## Impératif vs Déclaratif


---

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


<p class="fragment">Oulala qu'est ce que ça micromanage</p>


Note:

Micro management =
- déclaration de variables temporaire,
- for loops,
- if statements


---

### les symptomes de l'impératif

- déclaration de variables temporaires
- mutation de données
- des statements
  - for loops
  - if/else statements


---

####  Filtrer un tableau

Déclaratif :


```js
const oldUsers = filter(user => user.age > 30, users)

console.log(oldUsers)
// => [{ age: 31 }]
```


---



<!-- .slide: data-background="http://i.giphy.com/sN4xqr7YG4pm8.gif" -->

---

####  Filtrer un tableau

Déclaratif :


```js
const oldUsers = filter(user => user.age > 30, users)

console.log(oldUsers)
// => [{ age: 31 }]
```

On va **décrire** le comportement du programme

plutôt que de dire ce qu'il se passe

à chaque étape de la boucle.

Mais ou est donc définie la function filter ?


---

**Le déclaratif est construit sur de l’impératif.**

```js
function filter(predicate, xs) {
	let out = []
	for (let i = 0; i < xs.length; i++) {
		if (predicate(xs[i])) out.push(xs[i])
	}
	return out
}
```


<p class="fragment">`filter` est ce qu'on appelle une **Higher Order Function**</p>


---

## Higher Order Function

> “Its like the word Quintessential :

> when you say it, it just makes you feel smart.”

@mpjme

[Youtube - Higher Order Functions](https://www.youtube.com/watch?v=BMUiFMZr7vk)


---

### Higher Order Function

Une fonction qui :

<p class="fragment">va **abstraire** un bout de code **générique**</p>

<p class="fragment">va prendre une **autre** fonction en paramètre</p>

<p class="fragment">qui **décrit** le comportement **spécifique** de notre code.</p>


---

### Je vous ai menti
(un peu)

On peut aussi faire des boucles de manière déclarative




```js
const filter = (f, [x, ...rest]) =>
	rest.length
		? f(x) ? [x, ...filter(f, rest)] : filter(f, rest)
		: f(x) ? [x] : []
```


grâce à la recursion !


---

**Filter est build-in sur Array.prototype**
```js
const oldUsers = users.filter(user => user.age > 30)
```


---

### Transformer un tableau

>C'est à dire transformer chacun des items d'un tableau pour en créer un nouveau.

Impératif :

```js
const users = [{ age: 20 }, { age: 31 }, { age: 17 }]

let userAges = []
for (let i = 0; i < users.length; i++) {
	userAges.push(users[i].age)
}

console.log(userAges)
// => [20, 31, 17]
```


---

####  Transformer un tableau

Déclaratif : la méthode **map()**

```js
const userAges = users.map(user => user.age)
console.log(userAges)
// => [20, 31, 17]
```

OU

```js
const userAges = map(user => user.age, users)

console.log(userAges)
// => [20, 31, 17]
```


---

####  Transformer un tableau

implémentation de map

```js
function map(mapper, xs) {
	let out = []
	for (let i = 0; i < xs.length; i++) {
		out.push(mapper(xs[i]))
	}
	return out
}
```

ou avec recursion
```js
const map = (f, [x, ...rest]) =>
  rest.length ? [f(x), ...map(rest)] : [f(x)]
```


---

###  Accumuler un tableau

>C'est à dire transformer les items d'un tableau en une seule valeur.


Impératif :

```js
const numbers = [20, 31, 17]

let sum = 0
for (let i = 0; i < numbers.length; i++) {
	sum = sum + numbers[i]
}

console.log(sum)
// => 68
```


---

#### Accumuler un tableau

Déclaratif : la méthode **reduce()**

```js
const sum = numbers.reduce((acc, num) => acc + num, 0)

console.log(sum)
// => 68
```

OU

```js
const sum = reduce((acc, num) => acc + num, 0, numbers)

console.log(sum)
// => 68
```


---

#### Accumuler un tableau

Implémentation de reduce

```js
function reduce(reducer, seed, xs) {
  let out = seed
  for (let i = 0; i < xs.length; i++) {
    out = reducer(out, xs[i])
  }
  return out
}
```

Ou avec recursion

```js
const reduce = (f, acc, [x, ...rest]) =>
  rest.length ? reduce(f, f(acc, x), rest) : f(acc, x)
```


---

### Chainer ces modifications

C'est maintenant que ça prend tout son sens...


---

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


---



<!-- .slide: data-background="http://i.giphy.com/tO5ddHjpXB6lG.gif" -->

---

```js
const averageAge = users
  .filter(user => user.name === 'Kevin')
  .map(user => user.age)
  .reduce((acc, age, _, ages) => acc + age / ages.length, 0)
```

Et maintenant ?


---

### En conclusion

- **L'Impératif, visuellement, c'est pas facile.**

la spécificité du bout de code est noyée dans les détails d'implémentation génériques.


---

#### En conclusion

- **Impératif = code peu réutilisable**

nos boucles sont spécifiquement faite pour notre problème actuel.


---

#### En conclusion

- **Impératif = code complexe**


---

<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  Simplicity vs Complexity
</h2>


<p style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  Rich Hickey - [Simple Made Easy](https://www.youtube.com/watch?v=rI8tNMsozo0)
</p>


<!-- .slide: data-background="resources/simple-made-easy.png" -->

---

# T.P.

### Parser de la NASA !


---

<iframe src="https://codesandbox.io/embed/exercice-fp-declarative-vs-imperative-lrion?fontsize=14&view=editor" title="Exercice FP declarative vs imperative" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

---

## II
## Des petites functions réutilisables


---

### fonction pure

>une fonction pure (ou stateless) est une fonction qui respecte quelques petites règles.


---

#### une fonction pure

prend des paramètres et retourne un résultat

```js
// Pure
const add = (a, b) => a + b
add(2, 2)
// => 4

// Impure
const add = (a, b, cb) => {
  cb(a + b)
}
add(2, 2, v => console.log(v))
// => undefined
// "4"
```


---

#### une fonction pure

n'altère pas les paramètres qui lui sont passés


```js
// Pure
const addValue = (arr, v) => arr.concat(v)
addValue([1, 2, 3], 4)
// => [1, 2, 3, 4]


// Impure
const addValue = (arr, v) => {
  arr.push(v)
}

let myArray = [1, 2, 3]
addValue(myArray, 4)
// => undefined
// myArray === [1, 2, 3, 4]

```


---

#### une fonction pure

n'intéragit pas avec le scope dans lequel elle se trouve

```js
const number = 3

// Pure
const isOdd = x => !(x % 2)
isOdd(number)
// => true

// Impure
const isOdd = () => !(number % 2)
isOdd()
// => true

```


---

#### une fonction pure

n'a pas d'effet de bord


```js
// Impure
const getUsers = (callback) => {
  fetch(`/user`).then(callback)
}
```


---

### Pourquoi c'est chouette ?


Pour les mêmes arguments données la function retournera **toujours** la même chose. On peut Memoize!


Facile à **comprendre** car pas de dépendences externes.


Pas de comportement chelou.


---



<!-- .slide: data-background="http://i.giphy.com/tIeCLkB8geYtW.gif" -->

---

#### function pure

## Fonction as Data


---

### Ptit test


```js
const isThisPure = x => x * 2
```

alors ? pure ou pas pure ?


---

#### Ptit test


```js
const isThisPure = str => {
	window.title = str
}
```


---

#### Ptit test


```js
const isThisPure = str => {
	const title = `AppName - ${str}`
	return () => window.title = title
}
```


---

### “Mais avec ça on peut rien faire !”


---

#### Oui, c'est vrai.


---

Ce qui nous intéresse dans un programme c'est les side effects.

- Render quelque chose sur la page
- Réagir à des events
- Écrire dans une db

On va pas loin avec des fonctions pures.


---

Mais les side effects sont aussi les plus susceptibles de bugger.


---

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


---

#### Flow d'un code functional


Par exemple :

```

    GetData -> Computation -> Render
_
```
Computation = la logique de notre app


---

#### Flow d'un code functional



```

    render(compute(getData()))
_
```

Ca vous rappelle pas quelque chose ?


---

#### Flow d'un code functional



```

    view(controller(model()))
_
```


---

```

    view(controller(model()))
_
```

Bon c'est un peu tiré par les cheveux.

Mais on a bien nos trois parties

les **données**, le **traitement** et la **vue**.


---

<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  composition
</h2>


<!-- .slide: data-background="http://i.giphy.com/mGj3SVN7xbPQ4.gif" -->

---

## Mais qu'est ce donc ?

> Soit deux fonction `f(x)` et `g(x)`

> leur function composée est `f(g(x))`


---

<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  des maths :(
</h2>


<!-- .slide: data-background="resources/DontFearTheMonad.png" -->

---

##  Mais non !


---

<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  des legos ! :)
</h2>


<!-- .slide: data-background="resources/lego.jpg" -->

---

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


---

Pareil que

```js
const double = x => x * 2
const tripple = x => x * 3

const sixtuple = x => double(tripple(x))

console.log(sixtuple(7))
// 42

```


---

Pareil que

```js
const sixtuple = x => {
  const trippled = tripple(x)
  const result = double(trippled)
  return result
}

console.log(sixtuple(7))
// 42
```


---

#### Composition

Comme si on emboitait des légos !


---

> “The way to control Complexity

>is Compositionality.”

Brian Beckman: [Don't Fear The Monad](https://www.youtube.com/watch?v=ZhuHCtR3xq8)


---

#### (Parenthèse)

### Hindley-Milner Type Notation


---

#### Hindley-Milner Type Notation

Signature de function qui décrit son type

```hs

  multiplyByTwo :: Int -> Int
  const multiplyByTwo = x => x * 2
_
```


---

#### Hindley-Milner Type Notation

```hs

  length :: String -> Int
  const length = str => str.length
_
```


---

### Je l'ai pas inventé !

Il y a même un moteur de recherche pour ça :

![HOOGLE](resources/hoogle.png)
[HOOGLE](https://www.haskell.org/hoogle/)


Haskell Function Search Engine


---

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


---

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


---

#### la composition

## Le problème

>comment on fait quand les functions prènnent plusieurs arguments ?


---

<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  curry
</h2>
<p style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  la solution à tous nos soucis
</p>


<!-- .slide: data-background="resources/curry.jpg" -->

---

## Le Currying

> une fonction curriée est une function qui, lorsqu'on ne lui donne pas tous ses
 paramètres, renvoie une function qui prendra le reste.


---

### Le Currying


```js
import { curry } from 'ramda';

const sumOfFour = (a, b, c, d) => a + b + c + d

sumOfFour(1)
// => NaN

const curriedSumOfFour = curry(sumOfFour)
curriedSumOfFour(1)
// => (b, c, d) => 1 + b + c + d
_
```


---

### Le Currying

Presque pas besoin :

```js

const sumOfFour = a => b => c => d => a + b + c + d

sumOfFour(1)
// => (b, c, d) => 1 + b + c + d
_
```
en ES6, les `arrow functions` facilitent la syntaxe

des functions qui retournent des functions.


---

### Le Currying

Mais la function `curry` nous permet de passer

aussi plusieurs paramètres d'un coup si on veut :

```js

const sumOfFour = curry((a, b, c, d) => a + b + c + d)

sumOfFour(1, 2)
// => (c, d) => 1 + 2 + c + d

const sumOfFour = a => b => c => d => a + b + c + d

sumOfFour(1, 2)
// => (b, c, d) => 1 + b + c + d
// :(
_
```


---

#### (Parenthèse)

<h2>
  <span style="text-transform: capitalize !important;">Haskell </span>
  <span style="text-transform: capitalize !important;">Curry </span>
</h2>


---

<h1 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  T.P.
</h1>

<h3 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  Back to the nasa
</h3>


<!-- .slide: data-background="http://i.giphy.com/oZmk8DX9H0foA.gif" -->

---

#### reprenons


---

<h2 style="color: white !important; text-shadow: 0px 3px 15px rgba(0,0,0,.5)">
  Des données immutables
</h2>


<!-- .slide: data-background="resources/statue.jpg" -->

---

#### Des données immutables

> En functional programming lorsque l'on assigne une variable, ça veut dire
qu'elle ne changera plus jamais.


---

#### Des données immutables

Les données immutables c'est bien

parce ce que ça supprime de l'incertitude.


---

### Incertitude = Bug


---

#### (Parenthèse)

l'utilisation de `const` ne rend pas la donnée immutable.

Cela empèche juste que la variable puisse être ré-assignée.

Ou pourra toujours modifier les items d'un array ou les clés d'un objet.


---

#### Des données immutables

Comment éviter de mutter un tableau ?

ne **pas** utiliser `push()`

```js

  const immutablePush = (x, xs) => xs.concat(x)
  // OU
  const immutablePush = (x, xs) => [ ...xs, x]
_
```
modifier un item :
```js

  const immutableSetAtIndex = (index, value, xs) => [
    ...xs.slice(0, index),
    value,
    ...xs.slice(index + 1)
  ]
_
```


---

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


---

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


---

#### Des données immutables

Immutable.js


---

# Bientôt fini !
## plus que Les Setoid,
### Les Semigroup, Les Monoid, Les Functor,
#### Les Apply, Les Applicative, Les Foldable, Les Traversable,
##### Les Chain, Les Monad, Les Extend, Les Comonad ...


---



<!-- .slide: data-background="http://i.giphy.com/11RUijoqnc1yJW.gif" -->

---

## Merci

#### de votre attention


---

## Ressources
- [Eric Elliott - The Two pillars of Javascript - Part 2](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.507emzobw)

- [@mpjme - Youtube channel](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)

- [DrBoolean - Mostly Adequate Guide To Functional-Programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/)

- [Rich Hickey - Simple Made Easy](https://www.youtube.com/watch?v=rI8tNMsozo0)

- [DrBoolean - Hey Underscore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA)

- [Brian Beckman: Don't fear the Monad (pour les oufs)](https://www.youtube.com/watch?v=ZhuHCtR3xq8)

- [functinal programming en PHP (no joke)](http://www.phptherightway.com/pages/Functional-Programming.html)


---

Mon ptit nom c'est **Gabriel Vergnaud**

- [@gvergnaud on Github](https://github.com/gvergnaud)
- [@gabrielvergnaud on Twitter](https://twitter.com/GabrielVergnaud)
- [LinkedIn](https://www.linkedin.com/in/gabriel-vergnaud-09446199)


<style>
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flex > *:not(:first-child) {
    margin-left: 10px
  }

  img.simple-image.simple-image {
    border:none;
    box-shadow:none;
    background: none;
  }

  .white.white.white {
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0, .5);
  }

  .lower.lower.lower {
    text-transform: none;
  }

  .reveal {
    font-size: 32px;
  }

  .reveal small {
    font-size: 0.7em;
  }

  .reveal pre {
    border-radius: 5px;
    box-shadow: 0px 8px 25px rgba(0,0,0,.25);
  }

  .reveal section img {
    border: none;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15)
  }

  .reveal pre code {
    padding: 30px;
    border-radius: 5px;
    font-weight: normal;
  }

  .reveal code {
    font-weight: bold;
  }
</style>
