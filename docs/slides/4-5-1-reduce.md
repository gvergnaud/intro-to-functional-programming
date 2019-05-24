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
