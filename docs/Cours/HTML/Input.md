---
tags: [HTML, Balises, <input></input>]
---

# Les input en HTML

Les différents types d'`input` disponibles en HTML.

[Démonstration sur CodePen](https://codepen.io/Chrstn67/pen/jOjrraM)

En HTML, les éléments `<input>` permettent de créer divers types de champs dans un formulaire. Chaque type d'input est conçu pour recueillir des données spécifiques. Voici un aperçu des types d'input les plus courants :

## 1. **Texte (`text`)**

Permet à l'utilisateur de saisir du texte.

```html
<label for="username">Nom d'utilisateur:</label>
<input type="text" id="username" name="username" />
```

:::note

L'utilisateur peut à la fois saisir du texte, tout comme des chiffres ou des caractères spéciaux.
:::

## 2. **Mot de Passe (`password`)**

Permet de saisir un mot de passe, le texte est masqué et remplacé par des points gras.

```html
<label for="password">Mot de passe:</label>
<input type="password" id="password" name="password" />
```

:::note

L'utilisateur peut à la fois saisir du texte, tout comme des chiffres ou des caractères spéciaux.
:::

## 3. **Email (`email`)**

Permet de saisir une adresse e-mail et vérifie le format de l'e-mail.

```html
<label for="email">Email:</label> <input type="email" id="email" name="email" />
```

:::note

L'utilisateur peut à la fois saisir du texte, tout comme des chiffres ou des caractères spéciaux.
:::

## 4. **Numéro (`number`)**

Permet de saisir un nombre et inclut des flèches pour augmenter ou diminuer la valeur.

```html
<label for="age">Âge:</label>
<input type="number" id="age" name="age" min="0" max="120" />
```

:::note

L'utilisateur ne peut saisir que des chiffres.
:::

## 5. **Téléphone (`tel`)**

Permet de saisir un numéro de téléphone, sans validation spécifique.

```html
<label for="phone">Téléphone:</label>
<input type="tel" id="phone" name="phone" />
```

:::note

Sur un ordinateur, l'utilisateur peut à la fois saisir du texte, tout comme des chiffres ou des caractères spéciaux, même si cela ne correspond pas à la forme d'un numéro de téléphone.

Sur les appraeils mobiles, comme un smartphone, cela affichera un clavier téléphonique.
:::

## 6. **Date (`date`)**

Permet de sélectionner une date.

```html
<label for="birthday">Date de naissance:</label>
<input type="date" id="birthday" name="birthday" />
```

## 7. **Heure (`time`)**

Permet de sélectionner une heure.

```html
<label for="meeting-time">Heure de réunion:</label>
<input type="time" id="meeting-time" name="meeting-time" />
```

## 8. **Date et heure (`datetime-local`)**

Permet de sélectionner une date ET une heure en même temps.

```html
<label for="meeting-time">Date et Heure de réunion:</label>
<input type="datetime-local" id="meeting-time" name="meeting-time" />
```

## 9. **Couleur (`color`)**

Permet de sélectionner une couleur via une palette.

```html
<label for="favcolor">Couleur préférée:</label>
<input type="color" id="favcolor" name="favcolor" />
```

## 10. **URL (`url`)**

Permet de saisir une URL et vérifie le format de l'URL.

```html
<label for="website">Site web:</label>
<input type="url" id="website" name="website" />
```

## 11. **Fichier (`file`)**

Permet à l'utilisateur de sélectionner un fichier à télécharger.

```html
<label for="file-upload">Télécharger un fichier:</label>
<input type="file" id="file-upload" name="file-upload" />
```

## 12. **Case à cocher (`checkbox`)**

Permet de sélectionner une ou plusieurs options.

```html
<label for="subscribe">S'abonner à la newsletter:</label>
<input type="checkbox" id="subscribe" name="subscribe" />
```

## 13. **Bouton radio (`radio`)**

Permet de sélectionner une seule option parmi un groupe d'options.

```html
<p>Choisissez une couleur:</p>
<input type="radio" id="red" name="color" value="red" />
<label for="red">Rouge</label><br />
<input type="radio" id="blue" name="color" value="blue" />
<label for="blue">Bleu</label><br />
<input type="radio" id="green" name="color" value="green" />
<label for="green">Vert</label>
```

## 14. **Zone de texte (`textarea`)**

Permet de saisir un texte multi-lignes.

```html
<label for="comments">Commentaires:</label>
<textarea id="comments" name="comments" rows="4" cols="50"></textarea>
```

## 15. **Bouton (`button`)**

Crée un bouton cliquable. Peut être utilisé pour soumettre un formulaire, ou pour d'autres actions en JavaScript.

```html
<button type="button" id="myButton">Cliquez-moi</button>
<script>
  document.getElementById("myButton").addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton !");
  });
</script>
```

## 16. **Bouton de soumission (`submit`)**

Soumet le formulaire.

```html
<button type="submit" id="myButton2">Envoyer</button>
<script>
  document.getElementById("myButton2").addEventListener("click", function () {
    alert("Vous avez envoyé votre demande !");
  });
</script>
```

## 17. **Jauge horizontale (`range`)**

```html
<input type="range" id="volume" name="volume" min="0" max="10" step="1" />
<label for="volume">Volume</label>
```
