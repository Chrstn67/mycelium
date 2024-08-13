---
tags: [HTML, Lien, Bouton, Balises, <a></a>, <button></button>]
---

# Lien VS Bouton

Quelle est la différence d'utilité entre un `lien` et un `bouton` ?

[Démonstration sur CodePen](https://codepen.io/Chrstn67/pen/qBzNNgL)

## Lien

Un **_lien_** sert à naviguer d'une page web à une autre.

```html
<a href="https://www.example.com">Visitez Example.com</a>
```

- `<a>` : Balise d'ancrage utilisée pour créer un lien hypertexte.
- `href="https://www.example.com"` : Attribut qui spécifie l'URL vers laquelle le lien doit pointer.
- Le texte entre les balises `<a>` et `</a>` est ce que l'utilisateur verra et sur quoi il cliquera.

## Bouton

Un **_bouton_** sert à réagir (_ouvrir une fenêtre modale_, _lancer une animation_, _soumettre un formulaire_...). On y ajoute en règle général du code _JavaScript_.

```html
<button type="button" onclick="alert('Bouton cliqué!')">Cliquez-moi</button>
```

- `<button>` : Balise utilisée pour créer un bouton cliquable.
- `type="button"` : Attribut qui spécifie le type du bouton. type="button" est utilisé pour un bouton normal qui ne soumet pas un formulaire.
- `onclick="alert('Bouton cliqué!')"` : Attribut qui spécifie le script à exécuter lorsqu'on clique sur le bouton. Dans ce cas, il affiche une alerte avec le message "Bouton cliqué!".
- Le texte entre les balises `<button>` et `</button>` est ce que l'utilisateur verra écrit sur le bouton.

:::warning
Il ne faut **JAMAIS** mettre :

- un _lien dans un bouton 🚫_
- un _bouton dans lien 🚫_
  :::
