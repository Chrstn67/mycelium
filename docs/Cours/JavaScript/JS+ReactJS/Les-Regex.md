---
tags: [JavaScript, React, Regex, Méthodes]
---

# Les Regex

La hantise de 200% des développeurs...

[Démonstration sur CodePen](https://codepen.io/Chrstn67/pen/zYVBpbV)

## Introduction

Les expressions régulières (Regex) sont des motifs utilisés pour correspondre à des combinaisons de caractères dans des chaînes de texte. En JavaScript, elles sont extrêmement puissantes pour la manipulation de chaînes, la validation de formulaires, et bien d'autres tâches. Ce guide te donnera une compréhension approfondie des Regex en JavaScript, avec des exemples en JavaScript pur et en React.

## Syntaxe de base des Regex

En JavaScript, les Regex peuvent être créées de deux manières :

1. **Littéral Regex** : Utilise des barres obliques (/) pour entourer le motif.

   ```js
   const regex = /abc/;
   ```

2. **Objet RegExp** : Utilise le constructeur `RegExp`.
   ```js
   const regex = new RegExp("abc");
   ```

## Modificateurs

Les modificateurs permettent d’ajuster le comportement des Regex :

- `i` : Ignore la casse.
- `g` : Recherche globale (trouve toutes les occurrences).
- `m` : Recherche multilignes.
- `s` : Permet au point (`.`) de correspondre aux caractères de nouvelle ligne (un point = un caractère).
- `u` : Active le mode Unicode.
- `y` : Recherche positionnée.

### Exemples

```js
const regex1 = /abc/i; // Ignore la casse
const regex2 = /abc/g; // Recherche globale
const regex3 = /abc/m; // Recherche multilignes
```

## Caractères spéciaux

Les Regex utilisent des caractères spéciaux pour définir des motifs :

- `.` : Correspond à n'importe quel caractère sauf une nouvelle ligne.
- `\d` : Correspond à un chiffre (équivalent à `[0-9]`).
- `\w` : Correspond à un caractère de mot (lettres, chiffres, et underscore).
- `\s` : Correspond à un espace blanc (espace, tabulation, etc.).
- `\b` : Correspond à une limite de mot.
- `^` : Début de la chaîne.
- `$` : Fin de la chaîne.

### Exemples

```js
const regex1 = /.at/; // Correspond à "cat", "bat", "hat", etc.
const regex2 = /\d/; // Correspond à "0", "1", "2", etc.
const regex3 = /\w/; // Correspond à "a", "A", "0", "_", etc.
```

## Groupes et plages de caractères

- `[abc]` : Correspond à un caractère parmi 'a', 'b' ou 'c'.
- `[a-z]` : Correspond à un caractère parmi 'a' à 'z'.
- `[^abc]` : Correspond à un caractère qui n'est pas parmi 'a', 'b' ou 'c'.

### Exemples

```js
const regex1 = /[aeiou]/; // Correspond à une voyelle
const regex2 = /[0-9]/; // Correspond à un chiffre
const regex3 = /[^0-9]/; // Correspond à un non-chiffre
```

## Quantificateurs

- `*` : 0 ou plus.
- `+` : 1 ou plus.
- `?` : 0 ou 1.
- `{n}` : Exactement n occurrences.
- `{n,}` : Au moins n occurrences.
- `{n,m}` : Entre n et m occurrences.

### Exemples

```js
const regex1 = /a*/; // Correspond à "a", "aa", "", etc.
const regex2 = /a+/; // Correspond à "a", "aa", etc.
const regex3 = /a?/; // Correspond à "a" ou ""
const regex4 = /a{2}/; // Correspond à "aa"
const regex5 = /a{2,}/; // Correspond à "aa", "aaa", etc.
const regex6 = /a{2,4}/; // Correspond à "aa", "aaa", "aaaa"
```

## Groupes capturants et non-capturants

- `(abc)` : Groupe capturant.
- `(?:abc)` : Groupe non-capturant.

### Exemples

```js
const regex1 = /(abc)/; // Capture "abc"
const regex2 = /(?:abc)/; // Ne capture pas "abc"
```

## Assertions

- `?=` : Lookahead positif.
- `?!` : Lookahead négatif.
- `?<=` : Lookbehind positif.
- `?<!` : Lookbehind négatif.

### Exemples

```js
const regex1 = /a(?=b)/; // Correspond à "a" suivi de "b"
const regex2 = /a(?!b)/; // Correspond à "a" non suivi de "b"
const regex3 = /(?<=b)a/; // Correspond à "a" précédé de "b"
const regex4 = /(?<!b)a/; // Correspond à "a" non précédé de "b"
```

## Méthodes Regex en JavaScript

### Test

La méthode `test` vérifie si un motif existe dans une chaîne.

```js
const regex = /abc/;
const result = regex.test("abcde"); // true
```

### Match

La méthode `match` retourne les correspondances trouvées dans une chaîne.

```js
const regex = /abc/g;
const result = "abcdeabc".match(regex); // ["abc", "abc"]
```

### Replace

La méthode `replace` remplace les correspondances trouvées dans une chaîne.

```js
const regex = /abc/g;
const result = "abcdeabc".replace(regex, "xyz"); // "xyzdexyz"
```

### Split

La méthode `split` divise une chaîne par le motif correspondant.

```js
const regex = /-/;
const result = "2021-07-15".split(regex); // ["2021", "07", "15"]
```

## Exemples en React

### Validation de formulaire avec Regex

Imaginons un formulaire de connexion qui nécessite une validation d'email et de mot de passe.

```jsx
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setError("");
    // Continue with form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
```

:::info[Explication de la Regex]

```js
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

| Caractère/Groupe | Description                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `^`              | Indique le début de la chaîne. La correspondance doit commencer dès le début de la chaîne, sans aucun caractère avant.                                                                    |
| `[^\s@]+`        | Groupe de caractères qui match une ou plusieurs occurrences (indiqué par `+`) de tout caractère sauf un espace (`\s`) ou un `@`.                                                          |
| `[^\s@]`         | Correspond à n'importe quel caractère qui n'est ni un espace (`\s`) ni un `@`.                                                                                                            |
| `+`              | Indique que le groupe précédent doit apparaître au moins une fois, mais peut apparaître plusieurs fois.                                                                                   |
| `@`              | Correspond exactement au caractère `@`.                                                                                                                                                   |
| `[^\s@]+`        | Encore une fois, correspond à une ou plusieurs occurrences de n'importe quel caractère sauf un espace ou un `@`.                                                                          |
| `\.`             | Correspond exactement à un point (`.`). Note que le point doit être échappé avec un backslash (`\`) parce que, dans les regex, un point seul (`.`) correspond à n'importe quel caractère. |
| `[^\s@]+`        | Une dernière fois, correspond à une ou plusieurs occurrences de n'importe quel caractère sauf un espace ou un `@`.                                                                        |
| `$`              | Indique la fin de la chaîne. La correspondance doit se terminer à la fin de la chaîne, sans aucun caractère après.                                                                        |

:::

#### Exemples d'emails validés par cette regex

- user@example.com
- firstname.lastname@domain.co.uk
- email@subdomain.example.com

#### Exemples d'emails non validés par cette regex

- plainaddress (pas de @ et de domaine)
- @missingusername.com (manque le nom d'utilisateur avant le @)
- username@.com (manque le nom de domaine avant le point)

Cette regex est une manière simple mais efficace de vérifier la validité d'une adresse email. Cependant, il est important de noter que les adresses email peuvent avoir des formats très complexes et cette regex ne couvre pas tous les cas possibles. Pour une validation plus rigoureuse, des bibliothèques spécialisées ou une vérification côté serveur peuvent être nécessaires.

### Recherche en temps réel avec Regex

Imaginons un composant qui filtre une liste d'éléments en temps réel.

```jsx
import React, { useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const items = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
  ];

  const filteredItems = items.filter((item) => {
    const regex = new RegExp(searchTerm, "i");
    return regex.test(item);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
```

## Conclusion

Les expressions régulières en JavaScript sont un outil puissant pour manipuler et valider des chaînes de texte. Elles peuvent sembler complexes au début, mais avec de la pratique, tu découvriras leur utilité dans de nombreuses situations. Ce guide t'a fourni une base solide, que tu peux maintenant approfondir avec des exercices et des projets pratiques. Bon codage !
