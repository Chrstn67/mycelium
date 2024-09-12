---
tags: [Définitions, HTML]
---

# Définitions HTML

Tu trouveras ici une liste de définitons relatives au code HTML

# Définitions HTML

Tu trouveras ici une liste de définitions relatives au code HTML.

## Attribut

Un **attribut** en HTML est une information supplémentaire qui est ajoutée à une balise pour en préciser le comportement ou le contenu. Les attributs sont définis dans la balise d'ouverture d'un élément, sous la forme `nom="valeur"`. Ils permettent de modifier l'apparence, la fonction ou le comportement des éléments HTML.

### Exemple

```html
<img src="image.jpg" alt="Description de l'image" />
```

Ici, l'attribut `src` indique la source de l'image, et l'attribut `alt` fournit une description alternative qui sera utilisée si l'image ne peut pas être chargée ou pour l'accessibilité.

### Pourquoi les attributs sont-ils importants ?

Ils permettent de personnaliser et d'adapter les éléments HTML en fonction des besoins, ce qui est crucial pour l'accessibilité, l'interactivité et le bon fonctionnement des pages web.

---

## Balise

Une **balise** en HTML est un élément de base qui délimite le début et la fin d'un contenu ou d'une fonctionnalité spécifique sur une page web. Une balise est généralement constituée d'une balise d'ouverture (`<balise>`) et d'une balise de fermeture (`</balise>`), encadrant le contenu qu'elle décrit. Certaines balises sont dites "autonomes" (autofermantes) et n'ont pas besoin d'une balise de fermeture (par exemple `<img>`).

### Exemple

```html
<p>Ceci est un paragraphe.</p>
```

Dans cet exemple, la balise `<p>` délimite un paragraphe de texte.

### Exemple de balise autonome

```html
<img src="image.jpg" alt="Une image descriptive" />
```

Ici, la balise `<img>` est autonome car elle ne nécessite pas de balise de fermeture.

### Pourquoi les balises sont-elles importantes ?

Les balises permettent de structurer le contenu d'une page web. Elles définissent le rôle des différents éléments (titres, paragraphes, images, etc.) et sont essentielles pour créer une structure compréhensible et lisible par les navigateurs, moteurs de recherche, et outils d'accessibilité.

---

## Doctype

Le **DOCTYPE** est une déclaration située au tout début d'un document HTML. Il indique au navigateur la version du langage HTML utilisée, ce qui permet de s'assurer que le document est interprété correctement. En HTML5, cette déclaration est simplifiée à `<!DOCTYPE html>`.

### Exemple

```html
<!DOCTYPE html>
```

### Pourquoi le DOCTYPE est-il important ?

Il aide les navigateurs à rendre les pages web de manière cohérente, évitant des erreurs de compatibilité entre différentes versions de HTML.

---

## En-têtes (Headings)

Les **en-têtes** en HTML sont des balises sémantiques (`<h1>` à `<h6>`) qui servent à structurer le contenu d'une page en différentes sections. Le `<h1>` représente le titre principal, tandis que les niveaux suivants, jusqu'à `<h6>`, sont utilisés pour des sous-titres de hiérarchies décroissantes.

### Exemple

```html
<h1>Titre Principal</h1>
<h2>Sous-titre</h2>
<h3>Paragraphe de niveau 3</h3>
```

### Pourquoi les en-têtes sont-ils importants ?

Ils aident à structurer l'information pour les utilisateurs et les moteurs de recherche, tout en améliorant l'accessibilité et la navigation des pages.

---

## Formulaire

Un **formulaire** en HTML permet de recueillir des données auprès des utilisateurs à l'aide de champs interactifs tels que des zones de texte, des boutons radio, des cases à cocher et des boutons. La balise `<form>` encapsule ces éléments et transmet les données à un serveur pour traitement.

### Exemple

```html
<form action="/submit" method="post">
  <label for="nom">Nom :</label>
  <input type="text" id="nom" name="nom" />
  <input type="submit" value="Envoyer" />
</form>
```

### Pourquoi les formulaires sont-ils importants ?

Ils permettent aux utilisateurs d'interagir avec des sites web et de soumettre des informations, ce qui est essentiel pour des fonctionnalités comme les inscriptions, les connexions, ou les recherches.

---

## Métadonnées

Les **métadonnées** en HTML sont des informations sur la page, et non sur le contenu visible. Elles sont définies dans la balise `<head>` et servent à fournir des informations aux navigateurs, moteurs de recherche et autres services.

### Exemple

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
```

### Pourquoi les métadonnées sont-elles importantes ?

Elles jouent un rôle crucial pour l'optimisation des moteurs de recherche (SEO), la gestion des langues et des encodages, ainsi que pour définir le titre et d'autres informations critiques pour la page.

---

## Sémantique

La **sémantique** en HTML désigne l'utilisation de balises qui ont une signification claire et explicite sur le contenu qu'elles contiennent. Autrement dit, une balise sémantique donne une indication précise de la nature ou du rôle du contenu qu'elle encadre. Cela permet non seulement aux développeurs de mieux comprendre le code, mais aussi aux navigateurs, moteurs de recherche et outils d'accessibilité d'interpréter correctement l'information.

### Exemple

```html
<article>
  <h1>Le HTML sémantique</h1>
  <p>
    Le HTML sémantique améliore la lisibilité et l'accessibilité du contenu.
  </p>
</article>
```

### Contre-exemple

```html
<div>
  <div>Le HTML sémantique</div>
  <div>
    Le HTML sémantique améliore la lisibilité et l'accessibilité du contenu.
  </div>
</div>
```

### Pourquoi la sémantique est-elle importante ?

- **Accessibilité** : Les outils d'accessibilité, comme les lecteurs d'écran, dépendent des balises sémantiques pour fournir une expérience de navigation fluide aux utilisateurs malvoyants.
- **SEO (référencement)** : Les moteurs de recherche utilisent les balises sémantiques pour mieux comprendre le contenu d'une page et la classer correctement dans les résultats.
- **Maintenance** : Un code sémantique est plus facile à lire, à comprendre et à maintenir par les développeurs.
