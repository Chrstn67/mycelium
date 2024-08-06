---
tags: [JavaScript, React, Méthodes]
---

# Liste des méthodes JavaScript

Les méthodes en JavaScript sont des fonctions qui appartiennent à des objets. Elles permettent d'exécuter des actions ou de retourner des valeurs en travaillant directement sur les propriétés de ces objets. Les méthodes sont essentielles pour manipuler et interagir avec les données dans les applications JavaScript.

Voici une liste complète des méthodes JavaScript, classées par catégorie, avec une description de leur utilité.

## Méthodes des chaînes de caractères (String)

### **`charAt(index)`**

Retourne le caractère à la position spécifiée.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.charAt(7)); // "w"
```

:::

### **`charCodeAt(index)`**

Retourne le code Unicode du caractère à la position spécifiée.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.charCodeAt(7)); // 119
```

:::

### **`concat(string2, string3, ..., stringX)`**

Concatène une ou plusieurs chaînes de caractères.

:::tip[Exemple]

```javascript
let str1 = "Hello, ";
let str2 = "world!";
console.log(str1.concat(str2)); // "Hello, world!"
```

:::

### **`includes(substring, start)`**

Vérifie si la chaîne contient une sous-chaîne à partir d'une position spécifiée.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.includes("world")); // true
```

:::

### **`endsWith(substring, length)`**

Vérifie si la chaîne se termine par une sous-chaîne spécifiée.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.endsWith("world!")); // true
```

:::

### **`indexOf(substring, start)`**

Retourne la position de la première occurrence d'une sous-chaîne.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.indexOf("world")); // 7
```

:::

### **`lastIndexOf(substring, start)`**

Retourne la position de la dernière occurrence d'une sous-chaîne.

:::tip[Exemple]

```javascript
let str = "Hello, world! Hello, universe!";
console.log(str.lastIndexOf("Hello")); // 14
```

:::

### **`localeCompare(string)`**

Compare deux chaînes selon l'ordre lexicographique.

:::tip[Exemple]

```javascript
let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (str1 est avant str2)
```

:::

### **`match(regex)`**

Recherche une correspondance entre une expression régulière et la chaîne de caractères.

:::tip[Exemple]

```javascript
let str = "The rain in Spain stays mainly in the plain";
let result = str.match(/ain/g);
console.log(result); // ["ain", "ain", "ain"]
```

:::

### **`replace(substring|regex, newSubstring|function)`**

Remplace une sous-chaîne ou une correspondance regex par une nouvelle sous-chaîne ou le retour d'une fonction.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
let newStr = str.replace("world", "universe");
console.log(newStr); // "Hello, universe!"
```

:::

### **`search(regex)`**

Recherche une correspondance regex et retourne la position de la première occurrence.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.search(/world/)); // 7
```

:::

### **`slice(start, end)`**

Extrait une partie de la chaîne entre les indices spécifiés.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.slice(7, 12)); // "world"
```

:::

### **`split(separator, limit)`**

Divise une chaîne en un tableau de sous-chaînes en utilisant un séparateur.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
let arr = str.split(", ");
console.log(arr); // ["Hello", "world!"]
```

:::

### **`startsWith(substring, start)`**

Vérifie si la chaîne commence par une sous-chaîne spécifiée.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
```

:::

### **`substring(start, end)`**

Retourne une sous-chaîne entre les indices spécifiés.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
console.log(str.substring(7, 12)); // "world"
```

:::

### **`toLowerCase()`**

Convertit la chaîne en minuscules.

:::tip[Exemple]

```javascript
let str = "Hello, World!";
console.log(str.toLowerCase()); // "hello, world!"
```

:::

### **`toUpperCase()`**

Convertit la chaîne en majuscules.

:::tip[Exemple]

```javascript
let str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
```

:::

### **`trim()`**

Supprime les espaces blancs aux extrémités de la chaîne.

:::tip[Exemple]

```javascript
let str = "   Hello, world!   ";
console.log(str.trim()); // "Hello, world!"
```

:::

### **`valueOf()`**

Retourne la valeur primitive de la chaîne de caractères.

:::tip[Exemple]

```javascript
let str = new String("Hello, world!");
console.log(str.valueOf()); // "Hello, world!"
```

:::

## Méthodes des tableaux (Array)

### **`concat(array2, array3, ..., arrayX)`**

Concatène deux ou plusieurs tableaux.

:::tip[Exemple]

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

:::

### **`copyWithin(target, start, end)`**

Copie une partie du tableau vers une autre position dans le même tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]
```

:::

### **`entries()`**

Retourne un nouvel objet Array Iterator contenant les paires clé/valeur.

:::tip[Exemple]

```javascript
let arr = ["a", "b", "c"];
let iterator = arr.entries();
for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']
```

:::

### **`every(callback, thisArg)`**

Vérifie si tous les éléments du tableau passent le test implémenté par la fonction fournie.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let allBelowTen = arr.every((num) => num < 10);
console.log(allBelowTen); // true
```

:::

### **`fill(value, start, end)`**

Remplit les éléments du tableau avec une valeur statique.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4);
console.log(arr); // [1, 0, 0, 0, 5]
```

:::

### **`filter(callback, thisArg)`**

Crée un nouveau tableau avec tous les éléments qui passent le test implémenté par la fonction fournie.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.filter((num) => num > 2);
console.log(filteredArr); // [3, 4, 5]
```

:::

### **`find(callback, thisArg)`**

Retourne le premier élément du tableau qui passe un test (fourni sous forme de fonction).

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let found = arr.find((num) => num > 3);
console.log(found); // 4
```

:::

### **`findIndex(callback, thisArg)`**

Retourne l'indice du premier élément du tableau qui passe un test (fourni sous forme de fonction).

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let foundIndex = arr.findIndex((num) => num > 3);
console.log(foundIndex); // 3
```

:::

### **`forEach(callback, thisArg)`**

Exécute une fonction donnée sur chaque élément du tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => console.log(num * 2));
// 2
// 4
// 6
// 8
// 10
```

:::

### **`includes(element, start)`**

Vérifie si le tableau contient un certain élément.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
```

:::

### **`indexOf(element, start)`**

Retourne le premier indice où un élément donné peut être trouvé dans le tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.indexOf(3)); // 2
```

:::

### **`join(separator)`**

Joint tous les éléments d'un tableau en une chaîne et retourne cette chaîne.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.join("-")); // "1-2-3-4-5"
```

:::

### **`keys()`**

Retourne un nouvel objet Array Iterator contenant les clés pour chaque index dans le tableau.

:::tip[Exemple]

```javascript
let arr = ["a", "b", "c"];
let iterator = arr.keys();
for (let key of iterator) {
  console.log(key);
}
// 0
// 1
// 2
```

:::

### **`lastIndexOf(element, start)`**

Retourne le dernier indice où un élément donné peut être trouvé dans le tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5, 3];
console.log(arr.lastIndexOf(3)); // 5
```

:::

### **`map(callback, thisArg)`**

Crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map((num) => num * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]
```

:::

### **`pop()`**

Supprime le dernier élément d'un tableau et le retourne.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let lastElement = arr.pop();
console.log(lastElement); // 5
console.log(arr); // [1, 2, 3, 4]
```

:::

### **`push(element1, ..., elementN)`**

Ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4];
arr.push(5, 6);
console.log(arr); // [1, 2, 3, 4, 5, 6]
```

:::

### **`reduce(callback, initialValue)`**

Applique une fonction contre un accumulateur et chaque valeur du tableau (de gauche à droite) pour le réduire à une seule valeur.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

:::

### **`reduceRight(callback, initialValue)`**

Applique une fonction contre un accumulateur et chaque valeur du tableau (de droite à gauche) pour le réduire à une seule valeur.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduceRight((acc, num) => acc + num, 0);
console.log(sum); // 15
```

:::

### **`reverse()`**

Inverse l'ordre des éléments d'un tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```

:::

### **`shift()`**

Supprime le premier élément d'un tableau et le retourne.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let firstElement = arr.shift();
console.log(firstElement); // 1
console.log(arr); // [2, 3, 4, 5]
```

:::

### **`slice(start, end)`**

Retourne une copie superficielle d'une portion du tableau dans un nouvel objet tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]
```

:::

### **`some(callback, thisArg)`**

Vérifie si au moins un élément du tableau passe le test implémenté par la fonction fournie.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
let hasEvenNumber = arr.some((num) => num % 2 === 0);
console.log(hasEvenNumber); // true
```

:::

### **`sort(compareFunction)`**

Trie les éléments d'un tableau en place et retourne le tableau.

:::tip[Exemple]

```javascript
let arr = [5, 3, 8, 1, 2];
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 5, 8]
```

:::

### **`splice(start, deleteCount, item1, ..., itemX)`**

Change le contenu d'un tableau en retirant, remplaçant ou ajoutant des éléments.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b");
console.log(arr); // [1, 2, 'a', 'b', 4, 5]
```

:::

### **`toString()`**

Retourne une chaîne de caractères représentant le tableau spécifié et ses éléments.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.toString()); // "1,2,3,4,5"
```

:::

### **`unshift(element1, ..., elementN)`**

Ajoute un ou plusieurs éléments au début d'un tableau et retourne la nouvelle longueur du tableau.

:::tip[Exemple]

```javascript
let arr = [1, 2, 3, 4, 5];
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]
```

:::

### **`values()`**

Retourne un nouvel objet Array Iterator qui contient les valeurs pour chaque index du tableau.

:::tip[Exemple]

```javascript
let arr = ["a", "b", "c"];
let iterator = arr.values();
for (let value of iterator) {
  console.log(value);
}
// 'a'
// 'b'
// 'c'
```

:::

## Méthodes des objets globaux

### **`decodeURI(encodedURI)`**

Décode une URI créée par `encodeURI` ou par une méthode similaire.

:::tip[Exemple]

```javascript
let uri = "https://example.com/?search=Hello%20World";
let decodedURI = decodeURI(uri);
console.log(decodedURI); // "https://example.com/?search=Hello World"
```

:::

### **`decodeURIComponent(encodedURIComponent)`**

Décode un composant d'une URI créée par `encodeURIComponent` ou par une méthode similaire.

:::tip[Exemple]

```javascript
let component = "Hello%20World";
let decodedComponent = decodeURIComponent(component);
console.log(decodedComponent); // "Hello World"
```

:::

### **`encodeURI(URI)`**

Encode une URI en remplaçant certains caractères par une séquence d'échappement UTF-8.

:::tip[Exemple]

```javascript
let uri = "https://example.com/?search=Hello World";
let encodedURI = encodeURI(uri);
console.log(encodedURI); // "https://example.com/?search=Hello%20World"
```

:::

### **`encodeURIComponent(component)`**

Encode un composant d'une URI en remplaçant certains caractères par une séquence d'échappement UTF-8.

:::tip[Exemple]

```javascript
let component = "Hello World";
let encodedComponent = encodeURIComponent(component);
console.log(encodedComponent); // "Hello%20World"
```

:::

### **`escape(string)`**

Retourne une nouvelle chaîne de caractères avec certaines parties codées en utilisant la notation de pourcentage.

:::tip[Exemple]

```javascript
let str = "Hello, world!";
let escapedStr = escape(str);
console.log(escapedStr); // "Hello%2C%20world%21

"
```

:::

### **`eval(string)`**

Évalue le code JavaScript représenté sous forme de chaîne de caractères.

:::tip[Exemple]

```javascript
let code = "2 + 2";
let result = eval(code);
console.log(result); // 4
```

:::

### **`isFinite(value)`**

Détermine si la valeur passée est un nombre fini.

:::tip[Exemple]

```javascript
console.log(isFinite(42)); // true
console.log(isFinite(Infinity)); // false
```

:::

### **`isNaN(value)`**

Détermine si une valeur est NaN ou non.

:::tip[Exemple]

```javascript
console.log(isNaN(NaN)); // true
console.log(isNaN(42)); // false
```

:::

### **`Number(value)`**

Convertit la valeur passée en un nombre.

:::tip[Exemple]

```javascript
let str = "42";
let num = Number(str);
console.log(num); // 42
```

:::

### **`parseFloat(string)`**

Analyse une chaîne de caractères et retourne un nombre flottant.

:::tip[Exemple]

```javascript
let str = "3.14";
let num = parseFloat(str);
console.log(num); // 3.14
```

:::

### **`parseInt(string, radix)`**

Analyse une chaîne de caractères et retourne un nombre entier de la base spécifiée.

:::tip[Exemple]

```javascript
let str = "10";
let num = parseInt(str, 10);
console.log(num); // 10
```

:::

### **`unescape(string)`**

Décode une chaîne de caractères créée par `escape`.

:::tip[Exemple]

```javascript
let str = "Hello%2C%20world%21";
let unescapedStr = unescape(str);
console.log(unescapedStr); // "Hello, world!"
```

:::

## Méthodes des nombres (Number)

### **`toExponential(fractionDigits)`**

Retourne une chaîne de caractères représentant le nombre sous forme exponentielle.

:::tip[Exemple]

```javascript
let num = 12345.6789;
console.log(num.toExponential(2)); // "1.23e+4"
```

:::

### **`toFixed(digits)`**

Retourne une chaîne de caractères représentant le nombre avec un nombre fixe de décimales.

:::tip[Exemple]

```javascript
let num = 12345.6789;
console.log(num.toFixed(2)); // "12345.68"
```

:::

### **`toLocaleString(locales, options)`**

Retourne une chaîne de caractères avec une représentation locale du nombre.

:::tip[Exemple]

```javascript
let num = 12345.6789;
console.log(num.toLocaleString("en-US")); // "12,345.679"
```

:::

### **`toPrecision(precision)`**

Retourne une chaîne de caractères représentant le nombre à une précision spécifiée.

:::tip[Exemple]

```javascript
let num = 12345.6789;
console.log(num.toPrecision(6)); // "12345.7"
```

:::

### **`toString(radix)`**

Retourne une chaîne de caractères représentant le nombre dans une base spécifiée.

:::tip[Exemple]

```javascript
let num = 255;
console.log(num.toString(16)); // "ff"
```

:::

### **`valueOf()`**

Retourne la valeur primitive du nombre.

:::tip[Exemple]

```javascript
let num = 123;
console.log(num.valueOf()); // 123
```

:::

## Méthodes des objets (Object)

### **`assign(target, ...sources)`**

Copie les valeurs de toutes les propriétés énumérables propres d'un ou plusieurs objets source vers un objet cible.

:::tip[Exemple]

```javascript
let target = { a: 1 };
let source = { b: 2 };
let returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 2 }
```

:::

### **`create(proto, [propertiesObject])`**

Crée un nouvel objet avec le prototype d'objet et les propriétés spécifiées.

:::tip[Exemple]

```javascript
let person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

let me = Object.create(person);
me.name = "Matthew";
me.isHuman = true;
me.printIntroduction(); // "My name is Matthew. Am I human? true"
```

:::

### **`defineProperty(obj, prop, descriptor)`**

Ajoute une propriété nommée décrite par un descripteur à un objet.

:::tip[Exemple]

```javascript
let obj = {};
Object.defineProperty(obj, "property1", {
  value: 42,
  writable: false,
});
obj.property1 = 77; // throws an error in strict mode
console.log(obj.property1); // 42
```

:::

### **`defineProperties(obj, props)`**

Ajoute des propriétés décrites par des descripteurs à un objet.

:::tip[Exemple]

```javascript
let obj = {};
Object.defineProperties(obj, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {
    value: 43,
    writable: false,
  },
});
console.log(obj.property1); // 42
console.log(obj.property2); // 43
```

:::

### **`entries(obj)`**

Retourne un tableau des paires [clé, valeur] énumérables propres d'un objet donné.

:::tip[Exemple]

```javascript
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [ ['a', 1], ['b', 2], ['c', 3] ]
```

:::

### **`freeze(obj)`**

Fige un objet

cela empêche la modification des propriétés existantes et la création de nouvelles propriétés.

:::tip[Exemple]

```javascript
let obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // throws an error in strict mode
console.log(obj.prop); // 42
```

:::

### **`getOwnPropertyDescriptor(obj, prop)`**

Retourne le descripteur de propriété pour une propriété nommée d'un objet.

:::tip[Exemple]

```javascript
let obj = { property1: 42 };
let descriptor = Object.getOwnPropertyDescriptor(obj, "property1");
console.log(descriptor);
// { value: 42, writable: true, enumerable: true, configurable: true }
```

:::

### **`getOwnPropertyDescriptors(obj)`**

Retourne tous les descripteurs de propriété propres d'un objet.

:::tip[Exemple]

```javascript
let obj = { property1: 42, property2: 43 };
let descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// {
//   property1: { value: 42, writable: true, enumerable: true, configurable: true },
//   property2: { value: 43, writable: false, enumerable: true, configurable: true }
// }
```

:::

### **`getOwnPropertyNames(obj)`**

Retourne un tableau contenant les noms de toutes les propriétés propres (énumérables ou non) d'un objet.

:::tip[Exemple]

```javascript
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(obj)); // ["a", "b", "c"]
```

:::

### **`getOwnPropertySymbols(obj)`**

Retourne un tableau contenant les symboles de toutes les propriétés propres (énumérables ou non) d'un objet.

:::tip[Exemple]

```javascript
let obj = {};
let a = Symbol("a");
let b = Symbol("b");
obj[a] = "localSymbol";
obj[b] = "globalSymbol";
let objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
```

:::

### **`getPrototypeOf(obj)`**

Retourne le prototype (chaîne de prototypes) de l'objet spécifié.

:::tip[Exemple]

```javascript
let obj = {};
let proto = Object.getPrototypeOf(obj);
console.log(proto); // {}
```

:::

### **`is(value1, value2)`**

Détermine si deux valeurs sont la même valeur.

:::tip[Exemple]

```javascript
console.log(Object.is("foo", "foo")); // true
console.log(Object.is(window, window)); // true
console.log(Object.is("foo", "bar")); // false
console.log(Object.is([], [])); // false
let obj = { a: 1 };
let copy = obj;
console.log(Object.is(obj, copy)); // true
```

:::

### **`isExtensible(obj)`**

Détermine si l'extension de l'objet est autorisée.

:::tip[Exemple]

```javascript
let obj = {};
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
```

:::

### **`isFrozen(obj)`**

Détermine si un objet est figé.

:::tip[Exemple]

```javascript
let obj = Object.freeze({ prop: 42 });
console.log(Object.isFrozen(obj)); // true
```

:::

### **`isSealed(obj)`**

Détermine si un objet est scellé.

:::tip[Exemple]

```javascript
let obj = Object.seal({ prop: 42 });
console.log(Object.isSealed(obj)); // true
```

:::

### **`keys(obj)`**

Retourne un tableau contenant les noms des propriétés énumérables propres d'un objet.

:::tip[Exemple]

```javascript
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ["a", "b", "c"]
```

:::

### **`preventExtensions(obj)`**

Empêche l'extension d'un objet.

:::tip[Exemple]

```javascript
let obj = { prop: 42 };
Object.preventExtensions(obj);
obj.newProp = 77; // throws an error in strict mode
console.log(obj.newProp); // undefined
```

:::

### **`seal(obj)`**

Empêche d'autres modifications de la structure de l'objet (empêche d'ajouter ou de supprimer des propriétés).

:::tip[Exemple]

```javascript
let obj = { prop: 42 };
Object.seal(obj);
obj.newProp = 77; // throws an error in strict mode
delete obj.prop; // throws an error in strict mode
console.log(obj.prop); // 42
```

:::

### **`setPrototypeOf(obj, prototype)`**

Définit le prototype (c'est-à-dire, la chaîne de prototypes) d'un objet spécifié.

:::tip[Exemple]

```javascript
let obj = {};
let proto = { foo: "bar" };
Object.setPrototypeOf(obj, proto);
console.log(obj.foo); // "bar"
```

:::

### **`values(obj)`**

Retourne un tableau contenant les valeurs des propriétés énumérables propres d'un objet donné.

:::tip[Exemple]

```javascript
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
```

:::

## Méthodes des chaînes de caractères (String)

### **`charAt(index)`**

Retourne le caractère à la position spécifiée dans une chaîne de caractères.

:::tip[Exemple]

```javascript
let str = "Hello";
console.log(str.charAt(1)); // "e"
```

:::

### **`charCodeAt(index)`**

Retourne le code Unicode du caractère à la position spécifiée dans une chaîne de caractères.

:::tip[Exemple]

```javascript
let str = "Hello";
console.log(str.charCodeAt(1)); // 101
```

:::

### **`concat(string2, ..., stringN)`**

Combine le texte de deux (ou plus) chaînes de caractères et retourne une nouvelle chaîne.

:::tip[Exemple]

```javascript
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"
```

:::

### **`endsWith(searchString, length)`**

Vérifie si une chaîne se termine par les caractères d'une autre chaîne.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.endsWith("world")); // true
console.log(str.endsWith("hello")); // false
```

:::

### **`includes(searchString, position)`**

Vérifie si une chaîne contient les caractères d'une autre chaîne.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.includes("world")); // true
console.log(str.includes("hello")); // false
```

:::

### **`indexOf(searchValue, fromIndex)`**

Retourne le premier indice où un certain élément peut être trouvé dans la chaîne.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.indexOf("world")); // 6
console.log(str.indexOf("hello")); // -1
```

:::

### **`lastIndexOf(searchValue, fromIndex)`**

Retourne le dernier indice où un certain élément peut être trouvé dans la chaîne.

:::tip[Exemple]

```javascript
let str = "Hello world world";
console.log(str.lastIndexOf("world")); // 12
console.log(str.lastIndexOf("hello")); // -1
```

:::

### **`match(regexp)`**

Utilise une expression régulière pour faire correspondre la chaîne de caractères.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.match(/world/)); // ["world"]
```

:::

### **`repeat(count)`**

Retourne une nouvelle chaîne qui contient le nombre spécifié de copies de la chaîne sur laquelle elle a été appelée.

:::tip[Exemple]

```javascript
let str = "Hello";
console.log(str.repeat(3)); // "HelloHelloHello"
```

:::

### **`replace(searchFor, replaceWith)`**

Remplace les occurrences d'une chaîne de caractères par une autre.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.replace("world", "there")); // "Hello there"
```

:::

### **`search(regexp)`**

Exécute une recherche pour une correspondance entre une expression régulière et une chaîne de caractères.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.search(/world/)); // 6
console.log(str.search(/hello/)); // -1
```

:::

### **`slice(beginIndex, endIndex)`**

Extrait une section d'une chaîne et retourne une nouvelle chaîne.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-5)); // "world"
```

:::

13. **`split(separator, limit)`**

Divise une chaîne de caractères en un tableau de sous-chaînes.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.split(" ")); // ["Hello", "world"]
```

:::

### **`startsWith(searchString, position)`**

Vérifie si une chaîne commence par les caractères d'une autre chaîne.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("world")); // false
```

:::

### **`substr(start, length)`**

Extrait des caractères d'une chaîne, en commençant à un indice spécifié et en continuant pendant un certain nombre de caractères.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.substr(0, 5)); // "Hello"
console.log(str.substr(6, 5)); // "world"
```

:::

### **`substring(start, end)`**

Extrait les caractères d'une chaîne entre deux indices.

:::tip[Exemple]

```javascript
let str = "Hello world";
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substring(6)); // "world"
```

:::

### **`toLowerCase()`**

Retourne la chaîne de caractères en minuscules.

:::tip[Exemple]

```javascript
let str = "Hello World";
console.log(str.toLowerCase()); // "hello world"
```

:::

### **`toUpperCase()`**

Retourne la chaîne de caractères en majuscules.

:::tip[Exemple]

```javascript
let str = "Hello World";
console.log(str.toUpperCase()); // "HELLO WORLD"
```

:::

### **`trim()`**

Supprime les espaces blancs des deux côtés d'une chaîne.

:::tip[Exemple]

```javascript
let str = "  Hello World  ";
console.log(str.trim()); // "Hello World"
```

:::

### **`trimStart()`**

Supprime les espaces blancs du début d'une chaîne.

:::tip[Exemple]

```javascript
let str = "  Hello World  ";
console.log(str.trimStart()); // "Hello World  "
```

:::

### **`trimEnd()`**

Supprime les espaces blancs de la fin d'une chaîne.

:::tip[Exemple]

```javascript
let str = "  Hello World  ";
console.log(str.trimEnd()); // "  Hello World"
```

:::

## Méthodes des fonctions (Function)

### **`apply(thisArg, [argsArray])`**

Appelle une fonction avec un certain `this` et des arguments fournis sous forme de tableau (ou d'objet semblable à un tableau).

:::tip[Exemple]

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum.apply(null, [1, 2])); // 3
```

:::

### **`bind(thisArg, [arg1], [arg2], [...])`**

Crée une nouvelle fonction qui, lorsqu'elle est appelée, a son `this` défini à la valeur fournie, avec une séquence donnée d'arguments précédant ceux fournis lors de l'appel.

:::tip[Exemple]

```javascript
let module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
let unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
let boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
```

:::

### **`call(thisArg, arg1, arg2, [...])`**

Appelle une fonction avec un certain `this` et des arguments individuellement.

:::tip[Exemple]

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum.call(null, 1, 2)); // 3
```

:::

### **`toString()`**

Retourne une chaîne représentant la source de la fonction.

:::tip[Exemple]

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum.toString());
// "function sum(a, b) {
//   return a + b;
// }"
```

:::
