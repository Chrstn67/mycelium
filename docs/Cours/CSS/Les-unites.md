---
tags: [CSS, Frontend]
---

# Les unités CSS

Découvre comment et quand les utiliser

[Démonstration sur CodePen](https://codepen.io/Chrstn67/pen/zYVNgdd)

## Introduction

Les unités CSS sont essentielles pour définir les tailles, les espacements, les dimensions, et bien plus dans la conception de sites web. Voici une vue d'ensemble complète des différentes unités disponibles en CSS, y compris quand et comment les utiliser.

## Unités absolues

### Pixels (`px`)

Les pixels sont les unités les plus couramment utilisées. Elles sont fixes et ne changent pas en fonction de la taille de l'écran ou de l'utilisateur.

```css
div {
  width: 100px;
  height: 200px;
}
```

### Points (`pt`) et Picas (`pc`)

Principalement utilisés pour le design imprimé, les points et picas sont moins communs en web design. Un point équivaut à 1/72ème de pouce, et un pica est égal à 12 points.

```css
p {
  font-size: 12pt; /* 16px équivalent */
}
```

### Centimètres (`cm`) et Millimètres (`mm`)

Ces unités sont également utilisées principalement pour l'impression et sont rarement utilisées pour le web.

```css
div {
  width: 10cm;
}
```

### Pouces (`in`)

Un pouce équivaut à 2.54 centimètres.

```css
div {
  width: 2in;
}
```

## Unités relatives

### `em`

L'unité `em` est relative à la taille de la police de l'élément parent. Si la taille de la police du parent est de 16px, alors `1em` = 16px.

```css
div {
  font-size: 2em; /* Si le parent est 16px, alors 32px */
}
```

### `rem`

L'unité `rem` est relative à la taille de la police de l'élément racine (`html`). Par défaut, c'est 16px.

```css
div {
  font-size: 1.5rem; /* 24px si 1rem = 16px */
}
```

### Pourcentages (`%`)

Les pourcentages sont relatifs à la taille de l'élément parent.

```css
div {
  width: 50%; /* 50% de la largeur du parent */
}
```

### Viewport Width (`vw`) et Viewport Height (`vh`)

Les unités `vw` et `vh` sont relatives à la taille du viewport. `1vw` est 1% de la largeur du viewport, et `1vh` est 1% de la hauteur du viewport.

```css
div {
  width: 50vw; /* 50% de la largeur du viewport */
  height: 50vh; /* 50% de la hauteur du viewport */
}
```

### Dynamic Viewport Height (`dvh`), Large Viewport Height (`lvh`), Small Viewport Height (`svh`)

Ces unités permettent de gérer les variations de hauteur du viewport, notamment en tenant compte des barres d'outils de navigateur ou autres éléments UI.

```css
div {
  height: 100dvh; /* Hauteur dynamique du viewport */
  height: 100lvh; /* Hauteur large du viewport */
  height: 100svh; /* Hauteur petite du viewport */
}
```

## Unités de distance

### `ch`

L'unité `ch` est basée sur la largeur du caractère "0" (zéro) dans la police de l'élément.

```css
div {
  width: 20ch; /* Largeur de 20 caractères "0" */
}
```

### `ex`

L'unité `ex` est basée sur la hauteur de la lettre "x" dans la police de l'élément.

```css
div {
  height: 2ex;
}
```

### `cap`, `ic`, `lh`, `rlh`

Ces unités sont utilisées pour des dimensions typographiques avancées :

- `cap` : hauteur de la capitale
- `ic` : largeur idéographique (utilisée pour les caractères CJK)
- `lh` : hauteur de ligne
- `rlh` : hauteur de ligne racine

```css
div {
  font-size: 10lh; /* Hauteur de 10 lignes */
}
```

## Unités angulaires

### `deg`, `grad`, `rad`, `turn`

Ces unités sont utilisées pour les transformations de rotation et autres propriétés angulaires.

- `deg` : degrés (1 tour = 360deg)
- `grad` : grades (1 tour = 400grad)
- `rad` : radians (1 tour = 2π rad)
- `turn` : tours (1 tour = 1turn)

```css
div {
  transform: rotate(45deg); /* Rotation de 45 degrés */
}
```

## Unités temporelles

### `s` et `ms`

Les unités temporelles `s` (secondes) et `ms` (millisecondes) sont utilisées pour les animations et les transitions.

```css
div {
  transition: all 0.5s; /* Transition de 0.5 secondes */
}
```

## Unités de fréquence

### `Hz` et `kHz`

Ces unités sont principalement utilisées pour les propriétés audio.

```css
audio {
  frequency: 440Hz; /* Fréquence de 440 Hertz */
}
```

## Unités de résolution

### `dpi`, `dpcm`, `dppx`

Ces unités sont utilisées pour définir la résolution des images et des médias.

- `dpi` : points par pouce
- `dpcm` : points par centimètre
- `dppx` : points par pixel

```css
img {
  image-resolution: 300dpi; /* Résolution de 300 dpi */
}
```
