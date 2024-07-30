---
tags: [JavaScript, React, Boucles]
---

# Les boucles

Que sont les boucles en JavaScript ?

## 1. Boucle `for`

### Description

La boucle `for` est utilisée lorsque le nombre de répétitions est connu. Elle se compose de trois parties :

1. Initialisation : Déclare et initialise la variable de boucle.
2. Condition : Condition qui doit être vraie pour continuer la boucle.
3. Incrémentation : Mise à jour de la variable de boucle après chaque itération.

### Syntaxe

```javascript
for (initialisation; condition; incrémentation) {
  // Instructions à exécuter
}
```

### Exemple

#### Sans boucle

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Élément 0</p>
    <p>Élément 1</p>
    <p>Élément 2</p>
  </body>
</html>
```

#### Avec boucle `for`

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      for (let i = 0; i < 3; i++) {
        document.write(`<p>Élément ${i}</p>`);
      }
    </script>
  </body>
</html>
```

### Avantages et Inconvénients

**Avantages :**

- Contrôle précis sur le nombre d'itérations.
- Facile à comprendre et à utiliser.

**Inconvénients :**

- Nécessite de connaître à l'avance le nombre d'itérations.
- Moins flexible pour des collections de données dynamiques.

---

## 2. Boucle `while`

### Description

La boucle `while` répète une série d'instructions tant qu'une condition est vraie. Elle est utile lorsque le nombre d'itérations n'est pas connu à l'avance.

### Syntaxe

```javascript
while (condition) {
  // Instructions à exécuter
}
```

### Exemple

#### Sans boucle

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Élément 0</p>
    <p>Élément 1</p>
    <p>Élément 2</p>
  </body>
</html>
```

#### Avec boucle `while`

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      let i = 0;
      while (i < 3) {
        document.write(`<p>Élément ${i}</p>`);
        i++;
      }
    </script>
  </body>
</html>
```

### Avantages et Inconvénients

**Avantages :**

- Plus flexible pour des situations où le nombre d'itérations n'est pas prédéterminé.
- Simple à utiliser pour des conditions simples.

**Inconvénients :**

- Risque de boucle infinie si la condition n'est jamais fausse.
- Moins de contrôle sur le nombre d'itérations comparé à `for`.

---

## 3. Boucle `do...while`

### Description

La boucle `do...while` est similaire à `while`, mais elle garantit que le bloc d'instructions est exécuté au moins une fois, car la condition est vérifiée après l'exécution du bloc.

### Syntaxe

```javascript
do {
  // Instructions à exécuter
} while (condition);
```

### Exemple

#### Sans boucle

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Élément 0</p>
    <p>Élément 1</p>
    <p>Élément 2</p>
  </body>
</html>
```

#### Avec boucle `do...while`

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      let i = 0;
      do {
        document.write(`<p>Élément ${i}</p>`);
        i++;
      } while (i < 3);
    </script>
  </body>
</html>
```

### Avantages et Inconvénients

**Avantages :**

- Garantit une exécution initiale du bloc d'instructions.
- Utile lorsque le bloc doit être exécuté au moins une fois.

**Inconvénients :**

- Peut conduire à une boucle infinie si la condition reste vraie.
- Moins intuitif pour certains cas par rapport à `while`.

---

## 4. Boucle `for...in`

### Description

La boucle `for...in` est utilisée pour itérer sur les propriétés énumérables d'un objet ou les indices d'un tableau.

### Syntaxe

```javascript
for (var in objet) {
  // Instructions à exécuter
}
```

### Exemple

#### Sans boucle

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Propriété: nom, Valeur: John</p>
    <p>Propriété: âge, Valeur: 30</p>
  </body>
</html>
```

#### Avec boucle `for...in`

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      const personne = { nom: "John", âge: 30 };
      for (let propriété in personne) {
        document.write(
          `<p>Propriété: ${propriété}, Valeur: ${personne[propriété]}</p>`
        );
      }
    </script>
  </body>
</html>
```

### Avantages et Inconvénients

**Avantages :**

- Simple à utiliser pour itérer sur les propriétés d'un objet.
- Utilisable pour les tableaux pour obtenir les indices.

**Inconvénients :**

- Peut inclure des propriétés héritées, ce qui nécessite souvent un filtrage.
- Moins performant pour les tableaux comparé à `for` classique.

---

## 5. Boucle `for...of`

### Description

La boucle `for...of` est utilisée pour itérer sur les valeurs des objets itérables (comme les tableaux, les chaînes de caractères, les maps, etc.).

### Syntaxe

```javascript
for (var of iterable) {
  // Instructions à exécuter
}
```

### Exemple

#### Sans boucle

```html
<!DOCTYPE html>
<html>
  <body>
    <p>Élément: A</p>
    <p>Élément: B</p>
    <p>Élément: C</p>
  </body>
</html>
```

#### Avec boucle `for...of`

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      const tableau = ["A", "B", "C"];
      for (let valeur of tableau) {
        document.write(`<p>Élément: ${valeur}</p>`);
      }
    </script>
  </body>
</html>
```

### Avantages et Inconvénients

**Avantages :**

- Idéal pour les itérables, offrant une syntaxe claire et concise.
- Ne parcours que les valeurs, ce qui est souvent ce qui est souhaité.

**Inconvénients :**

- Ne fonctionne pas directement avec les objets.
- Moins flexible que `for...in` pour les propriétés des objets.

---
