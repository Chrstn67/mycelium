---
sidebar_position: 1
tags: [HTML, Balises]
---

# Les balises HTML avec leurs attributs

## Balises de premier niveau

Ces balises sont indispensables pour commencer à coder une page web en HTML. Elles permettent d’indiquer aux navigateurs qu’il s’agit d’une page HTML et de séparer l’en-tête du corps de la page.

- `<html>` : La balise principale qui englobe tout le contenu HTML de la page.  
  **Attributs :**

  - `lang` : Définit la langue de la page.
  - `dir` : Direction du texte (`ltr` ou `rtl`).

  ### Exemple :

  ```html
  <html lang="fr" dir="ltr">
    <head>
      <title>Mon site web</title>
    </head>
    <body>
      <h1>Bienvenue sur mon site web</h1>
      <p>Ceci est un paragraphe dans le corps de la page.</p>
    </body>
  </html>
  ```

## Balises d'en-tête

Ces balises sont situées dans l’en-tête de la page Web, entre `<head>` et `</head>`.

- `<link />` : Liaison avec une feuille de style externe.
- **Attributs :**

  - `href` : URL du fichier.
  - `rel` : Type de relation avec le document lié (ex : `stylesheet`).
  - `type` : Type MIME (ex : `text/css`).

- `<meta />` : Métadonnées.
- **Attributs :**

  - `charset` : Spécifie l'encodage des caractères.
  - `name` : Nom de la métadonnée (ex : `description`, `keywords`).
  - `content` : Valeur de la métadonnée.
  - `<script>` : Inclusion de code JavaScript.

- **Attributs :**

  - `src` : Lien vers un fichier externe JavaScript.
  - `async` : Le script est exécuté de manière asynchrone.
  - `defer` : Le script est exécuté après le chargement du document.

- `<style>` : Inclusion de CSS interne.

- `<title>` : Titre de la page.

### Exemple :

```html
<head>
  <meta charset="UTF-8" />
  <meta name="description" content="Exemple de page HTML avec attributs" />
  <title>Ma Page Web</title>
  <link rel="stylesheet" href="styles.css" type="text/css" />
</head>
```

## Balises de structuration du texte

Ces balises permettent de structurer et de mettre en forme le texte.

- `<abbr>` : Abréviation.
- **Attributs :**

  - `title` : Décrit la signification de l'abréviation.

- `<img />` : Image.
- **Attributs :**

  - `src` : URL de l’image.
  - `alt` : Texte alternatif.
  - `width` : Largeur de l’image.
  - `height` : Hauteur de l’image.

- `<a>` : Lien hypertexte.
- **Attributs :**
  - `href` : URL de destination.
  - `target` : Ouvre le lien dans une nouvelle fenêtre (`_blank`), etc.

### Exemple :

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> est le langage de balisage
  standard.
</p>
<img src="image.jpg" alt="Description de l'image" width="200" height="150" />
<a href="https://www.example.com" target="_blank">Visitez notre site</a>
```

## Balises de listes

Ces balises permettent de créer des listes.

- `<ul>` : Liste à puces (non numérotée).
- **Attributs :**

  - `type` : Type de puce (`disc`, `circle`, `square`).

- `<ol>` : Liste numérotée.
- **Attributs :**
  - `type` : Type de numérotation (`1`, `A`, `a`, `I`, `i`).
  - `start` : Numéro de départ de la liste.

### Exemple :

```html
<ul type="circle">
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>
<ol type="A" start="2">
  <li>Deuxième élément</li>
  <li>Troisième élément</li>
</ol>
```

## Balises de tableau

Ces balises permettent de créer des tableaux structurés.

- `<table>` : Tableau.
- **Attributs :**

  - `border` : Bordure du tableau.

- `<tr>` : Ligne de tableau.
- **Attributs :**

  - `align` : Alignement du texte (ex : `left`, `center`).

- `<td>` : Cellule du tableau.
- **Attributs :**
  - `colspan` : Étend la cellule sur plusieurs colonnes.
  - `rowspan` : Étend la cellule sur plusieurs lignes.

### Exemple :

```html
<table border="1">
  <tr>
    <th>Nom</th>
    <th>Âge</th>
  </tr>
  <tr>
    <td colspan="2">Jean, 30 ans</td>
  </tr>
</table>
```

## Balises de formulaire

Ces balises permettent de créer des formulaires interactifs.

- `<form>` : Délimite un formulaire.
- **Attributs :**

  - `action` : URL où le formulaire est soumis.
  - `method` : Méthode d'envoi (`get` ou `post`).

- `<input />` : Champ de formulaire.
- **Attributs :**

  - `type` : Type de champ (`text`, `password`, `checkbox`, etc.).
  - `name` : Nom du champ.
  - `value` : Valeur initiale du champ.

- `<textarea>` : Zone de saisie multiligne.
- **Attributs :**
  - `rows` : Nombre de lignes.
  - `cols` : Nombre de colonnes.

### Exemple :

```html
<form action="/submit" method="post">
  <label for="nom">Nom:</label>
  <input type="text" id="nom" name="nom" value="Jean" />

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50">
Votre message ici</textarea
  >

  <input type="submit" value="Envoyer" />
</form>
```

## Balises sectionnantes

Ces balises servent à structurer le contenu de la page web.

- `<header>` : En-tête de page ou de section.

- `<nav>` : Menu de navigation.

- `<section>` : Section thématique.

- `<article>` : Contenu autonome (ex : article de blog).

- `<aside>` : Informations complémentaires.

- `<footer>` : Pied de page.

### Exemple :

```html
<header>
  <h1>Titre de la page</h1>
  <nav>
    <ul>
      <li><a href="#home">Accueil</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<section>
  <article>
    <h2>Titre de l'article</h2>
    <p>Contenu de l'article...</p>
  </article>
  <aside>
    <p>Informations complémentaires...</p>
  </aside>
</section>
<footer>
  <p>Copyright 2024 - Mon site web</p>
</footer>
```

## Balises génériques

Ces balises n’ont pas de sens sémantique, mais sont utilisées pour le style.

- `<div>` : Balise générique de type block (prend tout l’espace en largeur).
- **Attributs :**
  - `id` : Identifiant unique.
  - `class` : Nom de classe pour le CSS.
- `<span>` : Balise générique de type inline.  
  **Attributs :**
  - `id` : Identifiant unique.
  - `class` : Nom de classe pour le CSS.

### Exemple :

```html
<div id="conteneur" class="main-conteneur">
  <span class="texte-important">Ceci est un texte important.</span>
</div>
```

## Attributs communs des balises HTML

Les balises peuvent avoir plusieurs attributs couramment utilisés :

- `id` : Identifiant unique pour un élément.
- `class` : Nom de classe utilisé pour appliquer des styles CSS.
- `style` : Applique des styles en ligne directement à un élément.
- `title` : Texte qui s'affiche en info-bulle lorsque l'élément est survolé.

### Exemple :

```html
<p id="intro" class="texte" style="color: red;" title="Information importante">
  Ceci est un paragraphe avec des attributs.
</p>
```
