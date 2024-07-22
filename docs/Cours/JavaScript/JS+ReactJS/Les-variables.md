---
tags: [JavaScript, React, Variables]
---

# Les variables

Que sont les variables en JS et comment les utiliser ?

## Introduction

JavaScript offre trois façons principales de déclarer des variables : `var`, `let`, et `const`. Chaque méthode a ses propres spécificités, avantages, et inconvénients. Comprendre quand et comment utiliser chacune d'elles est crucial pour écrire un code propre et efficace.

## 1. `var`

### Rôle

`var` est la manière traditionnelle de déclarer des variables en JavaScript. Avant **ES6 (ECMAScript 2015)**, c'était la seule façon de le faire. Les variables déclarées avec `var` sont _fonction-scope_ (ou _global-scope_ si elles sont déclarées en dehors d'une fonction) et peuvent être réassignées.

### Exemple

```javascript
function exampleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Réassignation de x
    console.log(x); // 20
  }
  console.log(x); // 20
}
exampleVar();
```

#### Exemple en React

```javascript
import React, { useState } from "react";

function ExampleVar() {
  var x = 10;
  const handleClick = () => {
    if (true) {
      var x = 20; // Réassignation de x
      console.log(x); // 20
    }
    console.log(x); // 20
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ExampleVar;
```

### Contre-exemple

```javascript
function exampleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Réassignation de x
    console.log(x); // 20
  }
  console.log(x); // 20
}
exampleVar();

console.log(x); // Erreur : x n'est pas défini globalement
```

#### Contre-exemple en React

```javascript
import React, { useState } from "react";

function ExampleVar() {
  var x = 10;
  const handleClick = () => {
    if (true) {
      var x = 20; // Réassignation de x
      console.log(x); // 20
    }
    console.log(x); // 20
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ExampleVar;

// Erreur : x n'est pas défini globalement
```

### Avantages

- Compatible avec les anciennes versions de **JavaScript**.
- Déclaration simple et rapide.

### Inconvénients

- Scope peu intuitif (_fonction-scope_).
- Peut entraîner des bugs difficiles à déboguer à cause du _hoisting_ (élévation).

### Quand l'utiliser

:::warning
`var` est généralement déconseillé pour le nouveau code. Il vaut mieux utiliser `let` ou `const` pour éviter des comportements inattendus liés au scope.
:::

## 2. `let`

### Rôle

`let` introduit dans **ES6**, permet de déclarer des variables _block-scope_, c'est-à-dire qu'**_elles sont limitées au bloc dans lequel elles sont définies_**. Elles peuvent être réassignées.

### Exemple

```javascript
function exampleLet() {
  let x = 10;
  if (true) {
    let x = 20; // Déclaration d'une nouvelle variable x dans ce bloc
    console.log(x); // 20
  }
  console.log(x); // 10
}
exampleLet();
```

#### Exemple en React

```javascript
import React, { useState } from "react";

function ExampleLet() {
  let x = 10;
  const handleClick = () => {
    if (true) {
      let x = 20; // Déclaration d'une nouvelle variable x dans ce bloc
      console.log(x); // 20
    }
    console.log(x); // 10
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ExampleLet;
```

### Contre-exemple

```javascript
function exampleLet() {
  let x = 10;
  if (true) {
    let x = 20; // Déclaration d'une nouvelle variable x dans ce bloc
    console.log(x); // 20
  }
  console.log(x); // 10
}

exampleLet();
console.log(x); // Erreur : x n'est pas défini globalement
```

#### Contre-exemple en React

```javascript
import React, { useState } from "react";

function ExampleLet() {
  let x = 10;
  const handleClick = () => {
    if (true) {
      let x = 20; // Déclaration d'une nouvelle variable x dans ce bloc
      console.log(x); // 20
    }
    console.log(x); // 10
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ExampleLet;

// Erreur : x n'est pas défini globalement
```

### Avantages

- Scope plus intuitif et localisé (_block-scope_).
- Réduit les risques de bugs liés au hoisting.

### Inconvénients

- Peut être réassigné, ce qui peut parfois entraîner des erreurs si on oublie cette possibilité.

### Quand l'utiliser

:::info
Utilise `let` lorsque tu sais que la valeur de la variable doit changer au cours de l'exécution de ton code.
:::

## 3. `const`

### Rôle

`const`, également introduit dans **ES6**, permet de déclarer des variables qui ne peuvent pas être réassignées. Comme `let`, `const` est _block-scope_.

### Exemple

```javascript
function exampleConst() {
  const x = 10;
  console.log(x); // 10
}
exampleConst();
```

#### Exemple en React

```javascript
import React from "react";

function ExampleConst() {
  const x = 10;
  const handleClick = () => {
    console.log(x); // 10
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ExampleConst;
```

### Contre-exemple

```javascript
function exampleConst() {
  const x = 10;
  x = 20; // Erreur : Réassignation d'une variable const
  console.log(x); // Erreur
}
exampleConst();
```

#### Contre-exemple en React

```javascript
import React from "react";

function ExampleConst() {
  const x = 10;
  const handleClick = () => {
    x = 20; // Erreur : Réassignation d'une variable const
    console.log(x); // Erreur
  };

  return <button onClick={handleClick}>Click me</button>;
}

export default ExampleConst;
```

### Avantages

- Empêche la réassignation, ce qui peut réduire les erreurs et rendre le code plus sûr.
- _Block-scope_, donc comportement intuitif.

### Inconvénients

- Une fois assignée, la variable ne peut plus être réassignée, ce qui peut être limitant dans certains cas.

### Quand l'utiliser

:::note
Utilise `const` lorsque tu sais que la valeur de la variable ne doit pas changer après son initialisation. C'est idéal pour les constantes ou les références d'objets que tu ne souhaites pas réassigner.
:::

## Conclusion

En résumé :

- **`var`** : Utilisé pour déclarer des variables avec un scope de fonction ou global. Déconseillé dans le code moderne à cause de son comportement inattendu avec le hoisting.
- **`let`** : Utilisé pour déclarer des variables avec un scope de bloc. Pratique lorsque tu sais que la variable devra être réassignée.
- **`const`** : Utilisé pour déclarer des variables avec un scope de bloc qui ne peuvent pas être réassignées. Idéal pour les valeurs constantes.

Choisir entre `let` et `const` dépend de l'usage que tu souhaites faire de la variable. Privilégie `const` autant que possible pour signaler que la variable ne devrait pas changer, et utilise `let` lorsque tu as besoin de réassigner des valeurs.
