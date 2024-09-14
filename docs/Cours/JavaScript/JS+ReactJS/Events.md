---
sidebar_position: 1
tags: [JS, Evénements, Events]
---

# Les `events` en JS

En JavaScript, les **événements** permettent de capturer les interactions de l'utilisateur avec une page web ou de suivre certains changements d'état dans le document. Cela rend une page interactive et réactive. Dans ce cours, je vais te guider à travers **tous les événements JavaScript**, en expliquant leur utilité, accompagnés d'exemples pour que tu puisses les utiliser correctement.

## 1. Les événements de la souris

Ces événements sont déclenchés lorsque l'utilisateur interagit avec la souris.

| Événement    | Description                                              |
| ------------ | -------------------------------------------------------- |
| `click`      | Se déclenche quand un élément est cliqué.                |
| `dblclick`   | Se déclenche quand un élément est double-cliqué.         |
| `mousedown`  | Se déclenche lorsque le bouton de la souris est enfoncé. |
| `mouseup`    | Se déclenche lorsque le bouton de la souris est relâché. |
| `mousemove`  | Se déclenche quand la souris bouge.                      |
| `mouseenter` | Se déclenche quand la souris entre dans un élément.      |
| `mouseleave` | Se déclenche quand la souris quitte un élément.          |

### Exemples :

```html
<button id="btn">Clique-moi !</button>
<script>
  document.getElementById("btn").addEventListener("click", function () {
    alert("Tu as cliqué !");
  });
</script>
```

Dans cet exemple, lorsque tu cliques sur le bouton, une alerte s'affiche.

## 2. Les événements du clavier

Les événements du clavier capturent les interactions de l'utilisateur avec les touches du clavier.

| Événement  | Description                                            |
| ---------- | ------------------------------------------------------ |
| `keydown`  | Se déclenche quand une touche est enfoncée.            |
| `keypress` | Se déclenche quand une touche est enfoncée (obsolète). |
| `keyup`    | Se déclenche quand une touche est relâchée.            |

### Exemples :

```html
<input type="text" id="inputField" placeholder="Tape quelque chose" />
<script>
  document
    .getElementById("inputField")
    .addEventListener("keydown", function (event) {
      console.log("Touche enfoncée :", event.key);
    });
</script>
```

Cet exemple affiche dans la console la touche enfoncée par l'utilisateur.

## 3. Les événements de la fenêtre (window)

Ces événements concernent l'état de la fenêtre du navigateur ou du document.

| Événement | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `load`    | Se déclenche quand toute la page (images incluses) est chargée. |
| `resize`  | Se déclenche quand la taille de la fenêtre change.              |
| `scroll`  | Se déclenche quand l'utilisateur fait défiler la page.          |
| `unload`  | Se déclenche quand l'utilisateur quitte la page (obsolète).     |

### Exemples :

```html
<script>
  window.addEventListener("resize", function () {
    console.log("Taille de la fenêtre modifiée !");
  });
</script>
```

Quand la fenêtre du navigateur est redimensionnée, un message est affiché dans la console.

## 4. Les événements de formulaire

Ces événements sont déclenchés en lien avec les éléments de formulaire.

| Événement | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `submit`  | Se déclenche quand un formulaire est soumis.                    |
| `focus`   | Se déclenche quand un élément reçoit le focus.                  |
| `blur`    | Se déclenche quand un élément perd le focus.                    |
| `change`  | Se déclenche quand la valeur d'un élément de formulaire change. |

### Exemples :

```html
<form id="myForm">
  <input type="text" id="name" name="name" placeholder="Ton nom" />
  <button type="submit">Envoyer</button>
</form>
<script>
  document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire
      alert("Formulaire soumis !");
    });
</script>
```

Cet exemple affiche une alerte lors de la soumission du formulaire.

## 5. Les événements du DOM

Ces événements suivent les modifications apportées au DOM (Document Object Model).

| Événement          | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `DOMContentLoaded` | Se déclenche quand le DOM est entièrement chargé.    |
| `mutation`         | Se déclenche quand un changement est apporté au DOM. |

### Exemples :

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Le DOM est prêt !");
  });
</script>
```

Ici, le message sera affiché dans la console une fois que le DOM est chargé.

## 6. Les événements tactiles (touch)

Ces événements sont destinés aux interactions sur les appareils tactiles.

| Événement     | Description                                           |
| ------------- | ----------------------------------------------------- |
| `touchstart`  | Se déclenche quand un contact tactile commence.       |
| `touchmove`   | Se déclenche quand un contact tactile est déplacé.    |
| `touchend`    | Se déclenche quand un contact tactile se termine.     |
| `touchcancel` | Se déclenche quand l'interaction tactile est annulée. |

### Exemples :

```html
<div
  id="touchArea"
  style="width:100px;height:100px;background-color:blue;"
></div>
<script>
  document
    .getElementById("touchArea")
    .addEventListener("touchstart", function () {
      alert("Touché !");
    });
</script>
```

Ici, l'alerte s'affiche dès qu'une interaction tactile commence sur le carré bleu.

## 7. Les événements de media

Ces événements sont liés aux éléments multimédias comme les vidéos ou audios.

| Événement | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `play`    | Se déclenche quand la lecture d'une vidéo ou d'un audio commence. |
| `pause`   | Se déclenche quand la lecture est mise en pause.                  |
| `ended`   | Se déclenche quand la lecture prend fin.                          |

### Exemples :

```html
<video id="video" width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
</video>
<script>
  document.getElementById("video").addEventListener("ended", function () {
    alert("Vidéo terminée !");
  });
</script>
```

Une alerte s'affiche lorsque la vidéo se termine.

## 8. Les événements d'entrée (input)

Ces événements capturent les interactions avec les éléments `input`, comme les champs de texte ou les cases à cocher.

| Événement | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| `input`   | Se déclenche quand la valeur d'un champ d'entrée change.            |
| `select`  | Se déclenche quand du texte est sélectionné dans un champ de texte. |

### Exemples :

```html
<input type="text" id="textField" placeholder="Tape ici" />
<script>
  document
    .getElementById("textField")
    .addEventListener("input", function (event) {
      console.log("Nouvelle valeur : ", event.target.value);
    });
</script>
```

Cet exemple affiche dans la console la nouvelle valeur saisie dans le champ de texte.
