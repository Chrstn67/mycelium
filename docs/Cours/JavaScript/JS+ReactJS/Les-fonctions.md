---
tags: [JavaScript, React, Fonctions]
---

# Les fonctions

Que sont les fonctions en JavaScript ?

[Démonstration CodePen](https://codepen.io/Chrstn67/pen/abgpEJE)

## Introduction aux Fonctions en JavaScript

Les fonctions en JavaScript sont des blocs de code réutilisables qui peuvent être appelés à plusieurs endroits de votre programme. Elles permettent de structurer et d'organiser votre code, de le rendre plus lisible et de réduire la duplication. Voici une présentation des différents types de fonctions en JavaScript, leurs cas d'utilisation, avantages et inconvénients, accompagnés d'exemples en HTML.

## Fonctions Déclarées

### Définition

Les fonctions déclarées sont définies avec le mot-clé `function` suivi du nom de la fonction. Elles sont "hoistées", ce qui signifie qu'elles peuvent être appelées avant leur déclaration dans le code.

### Syntaxe

```javascript
function nomDeLaFonction(param1, param2) {
  // Bloc de code
  return resultat;
}
```

### Exemple HTML

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Fonctions Déclarées</title>
  </head>
  <body>
    <script>
      function saluer(nom) {
        return "Bonjour, " + nom + "!";
      }

      console.log(saluer("Alice"));
    </script>
  </body>
</html>
```

**Cas d'utilisation:**

- Définir des fonctions réutilisables dans tout le programme.

**Avantages:**

- Hoisting : peut être appelée avant sa déclaration.
- Clair et lisible.

**Inconvénients:**

- Peut conduire à des collisions de noms si plusieurs fonctions portent le même nom.

## Fonctions Anonymes

### Définition

Les fonctions anonymes sont des fonctions sans nom. Elles sont souvent utilisées comme des arguments pour d'autres fonctions ou assignées à des variables.

### Syntaxe

```javascript
const maFonction = function (param1, param2) {
  // Bloc de code
  return resultat;
};
```

### Exemple HTML

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Fonctions Anonymes</title>
  </head>
  <body>
    <script>
      const ajouter = function (a, b) {
        return a + b;
      };

      console.log(ajouter(5, 3));
    </script>
  </body>
</html>
```

**Cas d'utilisation:**

- Utilisées comme callbacks ou assignées à des variables.

**Avantages:**

- Flexibilité et réutilisabilité.

**Inconvénients:**

- Moins lisible si utilisé de manière excessive.

## Fonctions Fléchées

### Définition

Les fonctions fléchées (arrow functions) offrent une syntaxe plus concise. Elles ne possèdent pas leur propre contexte `this`, ce qui les rend particulièrement utiles dans certaines situations comme les callbacks.

### Syntaxe

```javascript
const nomDeLaFonction = (param1, param2) => {
  // Bloc de code
  return resultat;
};
```

### Exemple HTML

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Fonctions Fléchées</title>
  </head>
  <body>
    <script>
      const multiplier = (a, b) => a * b;

      console.log(multiplier(4, 2));
    </script>
  </body>
</html>
```

**Cas d'utilisation:**

- Callbacks, méthodes de tableau, situations où le contexte `this` doit être maintenu.

**Avantages:**

- Syntaxe concise.
- Pas de propre contexte `this`.

**Inconvénients:**

- Pas approprié pour toutes les situations (comme les méthodes d'objet).

## Fonctions Génératrices

### Définition

Les fonctions génératrices permettent de définir une fonction qui peut être interrompue et reprise ultérieurement. Elles sont définies avec le mot-clé `function*` et utilisent `yield` pour produire une valeur à chaque étape.

### Syntaxe

```javascript
function* generatrice() {
  yield valeur1;
  yield valeur2;
  return valeurFinale;
}
```

### Exemple HTML

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Fonctions Génératrices</title>
  </head>
  <body>
    <script>
      function* compte() {
        yield 1;
        yield 2;
        yield 3;
      }

      const generateur = compte();

      console.log(generateur.next().value); // 1
      console.log(generateur.next().value); // 2
      console.log(generateur.next().value); // 3
    </script>
  </body>
</html>
```

**Cas d'utilisation:**

- Création d'itérateurs, gestion de flux de données.

**Avantages:**

- Contrôle sur l'exécution des fonctions.
- Gestion efficace des itérations.

**Inconvénients:**

- Moins intuitif, nécessite une compréhension approfondie.

## Fonctions Asynchrones

### Définition

Les fonctions asynchrones permettent de gérer des opérations asynchrones de manière plus lisible en utilisant `async` et `await`. Elles retournent toujours une promesse.

### Syntaxe

```javascript
async function nomDeLaFonction() {
  const resultat = await operationAsynchrone();
  return resultat;
}
```

### Exemple HTML

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Fonctions Asynchrones</title>
  </head>
  <body>
    <script>
      async function fetchData() {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        return data;
      }

      fetchData().then((data) => console.log(data));
    </script>
  </body>
</html>
```

**Cas d'utilisation:**

- Opérations asynchrones comme les requêtes réseau.

**Avantages:**

- Syntaxe plus lisible que les promesses traditionnelles.
- Gestion facile des erreurs avec `try/catch`.

**Inconvénients:**

- Nécessite une compréhension des promesses et de l'asynchronicité.
