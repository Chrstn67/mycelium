---
tags:
  [
    JavaScript,
    React,
    Données,
    String,
    Integer,
    Booléen,
    Undefined,
    Symbol,
    BigInt,
    Object,
    Array,
    Function,
    Date,
    RegExp,
    Map,
    Set,
  ]
---

# Les types de données

Que sont les différents types de données en JS ?

En JavaScript, il existe plusieurs types de données que tu peux utiliser pour stocker et manipuler des informations. Ces types de données peuvent être classés en deux grandes catégories : les types primitifs et les objets. Comprendre ces types est crucial pour devenir un développeur JavaScript compétent.

## Types Primitifs

### 1. **Number**

Le type `number` est utilisé pour représenter à la fois les entiers et les nombres à virgule flottante.

```javascript
let entier = 42;
let flottant = 3.14;
let negatif = -100;
let grandNombre = 1.23e5; // 123000
```

En React, tu peux utiliser les nombres directement dans le rendu JSX :

```jsx
function AfficherNombre() {
  const monNombre = 42;
  return <div>Mon nombre est {monNombre}</div>;
}
```

### 2. **String**

Le type `string` est utilisé pour représenter des chaînes de caractères. Tu peux utiliser des guillemets simples, doubles ou des backticks pour créer des chaînes de caractères.

```javascript
let simple = "Bonjour";
let double = "tout le monde";
let backticks = `Bonjour, ${double}!`;
```

:::info
En général, lors de la sauvegarde du fichier sur l'IDE, les simples guillemets se transforment automatiquement en double.
:::

En React :

```jsx
function AfficherMessage() {
  const message = "Bonjour, Monde!";
  return <div>{message}</div>;
}
```

### 3. **Boolean**

Le type `boolean` a deux valeurs possibles : `true` et `false`.

```javascript
let vrai = true;
let faux = false;
```

En React, les booléens sont souvent utilisés pour conditionner le rendu :

```jsx
function AfficherCondition() {
  const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <p>Bienvenue!</p> : <p>Veuillez vous connecter.</p>}
    </div>
  );
}
```

### 4. **Null**

Le type `null` représente l'absence volontaire de valeur.

```javascript
let sansValeur = null;
```

### 5. **Undefined**

Le type `undefined` indique qu'une variable a été déclarée mais n'a pas encore été assignée.

```javascript
let nonDefini;
console.log(nonDefini); // undefined
```

### 6. **Symbol**

Le type `symbol` est utilisé pour créer des identifiants uniques.

```javascript
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false
```

### 7. **BigInt**

Le type `BigInt` est utilisé pour représenter des entiers qui sont trop grands pour être représentés par le type `number`.

```javascript
let grandEntier = BigInt(123456789012345678901234567890);
let autreGrandEntier = 123456789012345678901234567890n;
```

## Objets

### 1. **Object**

Les objets sont utilisés pour stocker des collections de données et des entités plus complexes.

```javascript
let personne = {
  nom: "John",
  age: 30,
  saluer: function () {
    console.log("Bonjour!");
  },
};
```

En React, les objets peuvent être utilisés pour passer des propriétés (props) :

```jsx
function AfficherPersonne(props) {
  return (
    <div>
      <p>Nom: {props.nom}</p>
      <p>Âge: {props.age}</p>
    </div>
  );
}

// Utilisation
const personne = { nom: "John", age: 30 };

function App() {
  return <AfficherPersonne {...personne} />;
}
```

### 2. **Array**

Les tableaux sont des listes ordonnées de valeurs.

```javascript
let nombres = [1, 2, 3, 4, 5];
let melange = [1, "Bonjour", true, null];
```

En React, tu peux utiliser des tableaux pour rendre des listes d'éléments :

```jsx
function AfficherListe() {
  const items = ["Pomme", "Banane", "Orange"];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### 3. **Function**

Les fonctions sont des objets qui peuvent être appelés.

```javascript
function saluer(nom) {
  return `Bonjour, ${nom}!`;
}

const multiplier = (a, b) => a * b;
```

En React, les fonctions sont utilisées pour définir des composants et des hooks :

```jsx
function Bouton(props) {
  return <button onClick={props.onClick}>Clique-moi</button>;
}

// Utilisation
function App() {
  const handleClick = () => {
    alert("Bouton cliqué!");
  };

  return <Bouton onClick={handleClick} />;
}
```

### 4. **Date**

Le type `Date` est utilisé pour représenter les dates et heures.

```javascript
let maintenant = new Date();
let dateSpecifique = new Date("2024-07-23");
```

### 5. **RegExp**

Les expressions régulières sont utilisées pour correspondre à des motifs dans les chaînes de caractères.

```javascript
let motif = /bonjour/i;
console.log(motif.test("Bonjour le monde")); // true
```

## Type de données complexes

### 1. **Map**

Les objets `Map` permettent de stocker des paires clé-valeur. Contrairement aux objets, les clés peuvent être de n'importe quel type.

```javascript
let map = new Map();
map.set("nom", "John");
map.set(1, "one");
console.log(map.get("nom")); // John
```

### 2. **Set**

Les objets `Set` permettent de stocker des valeurs uniques.

```javascript
let set = new Set();
set.add(1);
set.add(1); // Ignoré
set.add(2);
console.log(set.size); // 2
```

## Conclusion

En comprenant et en utilisant correctement ces différents types de données, tu seras en mesure de créer des applications JavaScript et React robustes et performantes. N'oublie pas de toujours vérifier les types de données que tu manipules pour éviter les erreurs et améliorer la lisibilité de ton code.
