---
tags: [HTML, Balises]
---

# Les balises HTML avec leurs attributs

Pour encore plus de détails, voir les sites [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element) ou [Devdocs.io](https://devdocs.io/html/).

## Balises de premier niveau

Ces balises sont indispensables pour commencer à coder une page web en HTML. Elles permettent d’indiquer aux navigateurs qu’il s’agit d’une page HTML et de séparer l’en-tête du corps de la page.

- `<html>` : La balise principale qui englobe tout le contenu HTML de la page.  
  **Attributs :**
  - `lang` : Définit la langue de la page.
  - `dir` : Direction du texte (`ltr` ou `rtl`).
  - `manifest` : Spécifie le fichier manifeste pour l'application hors ligne.

### Exemple :

```html
<html lang="fr" dir="ltr" manifest="app.manifest">
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
  - `media` : Type de média pour lequel le lien est conçu (ex : `screen`, `print`).

- `<meta />` : Métadonnées.
- **Attributs :**

  - `charset` : Spécifie l'encodage des caractères.
  - `name` : Nom de la métadonnée (ex : `description`, `keywords`).
  - `content` : Valeur de la métadonnée.
  - `http-equiv` : Instruction pour le navigateur (ex : `refresh` pour recharger la page).

- `<script>` : Inclusion de code JavaScript.
- **Attributs :**

  - `src` : Lien vers un fichier externe JavaScript.
  - `async` : Le script est exécuté de manière asynchrone.
  - `defer` : Le script est exécuté après le chargement du document.
  - `type` : Type MIME (ex : `text/javascript`).

- `<style>` : Inclusion de CSS interne.
- **Attributs :**

  - `type` : Type MIME (ex : `text/css`).
  - `media` : Type de média pour lequel le style est conçu.

- `<title>` : Titre de la page.

### Exemple :

```html
<head>
  <meta charset="UTF-8" />
  <meta name="description" content="Exemple de page HTML avec attributs" />
  <meta http-equiv="refresh" content="30" />
  <title>Ma Page Web</title>
  <link rel="stylesheet" href="styles.css" type="text/css" media="screen" />
  <style type="text/css" media="screen">
    body {
      background-color: #f0f0f0;
    }
  </style>
  <script src="script.js" async></script>
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
  - `loading` : Définit le chargement différé de l’image (`lazy`, `eager`).

- `<a>` : Lien hypertexte.
- **Attributs :**

  - `href` : URL de destination.
  - `target` : Ouvre le lien dans une nouvelle fenêtre (`_blank`), etc.
  - `download` : Suggère de télécharger le fichier.
  - `rel` : Décrit la relation entre le document courant et la cible (ex : `nofollow`).

- `<ins>` : Marque un texte inséré dans le document.
- **Attributs :**

  - `datetime` : Indique la date et l'heure d'insertion.

- `<sup>` : Exposant.
- `<sub>` : Indice.

- `<time>` : Représente une date, une heure, ou un intervalle temporel.
- **Attributs :**
  - `datetime` : Indique la date ou l'heure représentée.

### Exemple :

```html
<p>
  <abbr title="HyperText Markup Language">HTML</abbr> est le langage de balisage
  standard.
</p>
<time datetime="2024-09-20">20 septembre 2024</time>
<img
  src="image.jpg"
  alt="Description de l'image"
  width="200"
  height="150"
  loading="lazy"
/>
<a href="https://www.example.com" target="_blank" download="example.pdf"
  >Télécharger l'exemple</a
>
<ins datetime="2024-09-20">Texte inséré</ins>
<sup>Note</sup> et <sub>Indice</sub>
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
  - `reversed` : Inverse l'ordre des éléments de la liste.

- `<dl>` : Liste de définition.

  > Cette balise peut contenir les balises `<dt>` et `<dd>`.

- `<dt>` : Terme de la définition (titre du terme).

- `<dd>` : Définition du terme (description associée).

### Exemple :

```html
<ul type="circle">
  <li>Élément 1</li>
  <li>Élément 2</li>
</ul>

<ol type="A" start="2" reversed>
  <li>Deuxième élément</li>
  <li>Premier élément</li>
</ol>

<dl>
  <dt>HTML</dt>
  <dd>
    Langage de balisage utilisé pour structurer le contenu d'une page web.
  </dd>
  <dt>CSS</dt>
  <dd>Feuilles de style en cascade utilisées pour styliser les pages web.</dd>
</dl>
```

## Balises de tableau

Ces balises permettent de créer des tableaux structurés.

- `<table>` : Tableau.
- **Attributs :**

  - `border` : Définit la largeur de la bordure du tableau.

- `<tr>` : Ligne de tableau.

- `<th>` : Cellule d'en-tête de tableau.
- **Attributs :**

  - `scope` : Définit la portée de l'en-tête (`col`, `row`, `colgroup`, `rowgroup`).

- `<td>` : Cellule du tableau.
- **Attributs :**

  - `colspan` : Étend la cellule sur plusieurs colonnes.
  - `rowspan` : Étend la cellule sur plusieurs lignes.

- `<tfoot>` : Section de pied de tableau.

### Exemple :

```html
<table border="1">
  <tr>
    <th scope="col">Nom</th>
    <th scope="col">Âge</th>
  </tr>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
    </tr>
  </tfoot>
</table>
```

## Balises de formulaire

Ces balises permettent de créer des formulaires interactifs.

- `<form>` : Délimite un formulaire.
- **Attributs :**

  - `action` : URL où le formulaire est soumis.
  - `method` : Méthode d'envoi (`get` ou `post`).
  - `enctype` : Type d'encodage des données (ex : `multipart/form-data`).

- `<input />` : Champ de formulaire.
- **Attributs :**

  - `type` : Type de champ (`text`, `password`, `checkbox`, etc.).
  - `name` : Nom du champ.
  - `value` : Valeur initiale du champ.
  - `placeholder` : Texte indicatif dans le champ.

- `<textarea>` : Zone de saisie multiligne.
- **Attributs :**

  - `rows` : Nombre de lignes.
  - `cols` : Nombre de colonnes.

- `<fieldset>` : Regroupe des champs dans un formulaire.
- `<legend>` : Légende pour un `<fieldset>`.

- `<optgroup>` : Groupe d'options dans

une liste déroulante.

- `<option>` : Option dans une liste déroulante.

- `<details>` : Composant dépliable.
- `<summary>` : Résumé cliquable d'un `<details>`.

### Exemple :

```html
<form action="/submit" method="post" enctype="multipart/form-data">
  <fieldset>
    <legend>Informations personnelles</legend>
    <label for="nom">Nom:</label>
    <input type="text" id="nom" name="nom" placeholder="Jean" />
  </fieldset>

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50">
Votre message ici</textarea
  >

  <label for="pays">Pays:</label>
  <select id="pays" name="pays">
    <optgroup label="Europe">
      <option value="fr">France</option>
      <option value="de">Allemagne</option>
    </optgroup>
  </select>

  <details>
    <summary>Plus d'informations</summary>
    <p>Texte détaillé ici.</p>
  </details>

  <button type="submit" value="Envoyer">Envoyer</button>
</form>
```

## Balises multimédia

Ces balises permettent d’intégrer du contenu audio ou vidéo.

- `<audio>` : Intègre un fichier audio.
- **Attributs :**

  - `controls` : Affiche les contrôles du lecteur audio.
  - `src` : URL de la source audio.

- `<video>` : Intègre un fichier vidéo.
- **Attributs :**
  - `controls` : Affiche les contrôles du lecteur vidéo.
  - `src` : URL de la vidéo.
  - `width` : Largeur de la vidéo.
  - `height` : Hauteur de la vidéo.

### Exemple :

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Votre navigateur ne supporte pas l'élément audio.
</audio>

<video controls width="300" height="200">
  <source src="video.mp4" type="video/mp4" />
  Votre navigateur ne supporte pas l'élément vidéo.
</video>
```

## Balises de structure sémantique

Ces balises servent à structurer le contenu de la page web.

- `<header>` : En-tête de page ou de section.
- `<nav>` : Menu de navigation.
- `<section>` : Section thématique.
- `<article>` : Contenu autonome (ex : article de blog).
- `<aside>` : Informations complémentaires.
- `<footer>` : Pied de page.

Il existe également la balise `<dialog>` qui sert à afficher des modales permettant d'afficher une boîte de dialogue native.
Voir [le cours sur les modales](Modales.pdf)

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
- `data-*` : Attribut personnalisé pour stocker des données privées.

### Exemple :

```html
<p
  id="intro"
  class="texte"
  style="color: red;"
  title="Information importante"
  data-info="extra"
>
  Ceci est un paragraphe avec des attributs.
</p>
```

:::warning

Bien que dans cet exemple on puisse ajouter du style CSS à la balise, il est déconseillé de procéder ainsi. Le plus optimal est de créer un fichier CSS à part et ne pas oublier de l'importer dans le code HTML.

:::
