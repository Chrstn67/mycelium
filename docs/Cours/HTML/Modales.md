---
tags: [HTML, Modale, Balises, <dialog></dialog>, JavaScript, React]
---

# Modales

### Qu'est-ce qu'une **modale** ?

[Démonstration sur CodePen](https://codepen.io/Chrstn67/pen/VwJeQjQ)

:::note[Définition]
En HTML, une **modale** (ou _boîte de dialogue_) est une fenêtre contextuelle qui apparaît au-dessus de la page web principale, obligeant les utilisateurs à interagir avec elle avant de pouvoir revenir à la page principale. Les modales sont souvent utilisées pour afficher des informations importantes, recueillir des entrées utilisateur ou obtenir une confirmation avant d'exécuter une action.

Les modales peuvent contenir divers éléments tels que du texte, des images, des formulaires, des boutons, etc.
:::

## Section JavaScript Vanilla

### Modale ouverte, impossible à fermer

Pour construire une modale en HTML, on utilise la balise `<dialog>`. On peut ajouter l'attribut `open` pour que la modale soit ouverte par défaut et sans bouton pour la fermer.

:::warning[Il y a la balise `<dialog>` qui fait tout le travail : Il est inutile d'utiliser d'autres balises !]

:::

```html
<dialog open>
  Ceci est une modale ouverte par défaut. Il est impossible de la fermer.
</dialog>
```

### Une modale ouverte qu'on peut fermer mais pas rouvrir

Pour rendre une modale fermable, nous devons ajouter un bouton et du code JavaScript pour gérer sa fermeture.

```html
<dialog open id="maModale">
  Ceci est une modale ouverte qu'il est possible de fermer, mais pas de rouvrir.
  <button id="fermerModale">Fermer</button>
</dialog>

<script>
  document
    .getElementById("fermerModale")
    .addEventListener("click", function () {
      document.getElementById("maModale").close();
    });
</script>
```

### Une modale fermée, qu'on peut rouvrir et fermer

Pour ouvrir une modale avec JavaScript, nous utilisons la méthode `showModal()` de l'élément `<dialog>`.

```html
<dialog id="maModale">
  Ceci est une modale qui peut être ouverte et fermée.
  <button id="fermerModale">Fermer</button>
</dialog>

<button id="ouvrirModale">Ouvrir la modale</button>

<script>
  document
    .getElementById("ouvrirModale")
    .addEventListener("click", function () {
      document.getElementById("maModale").showModal();
    });

  document
    .getElementById("fermerModale")
    .addEventListener("click", function () {
      document.getElementById("maModale").close();
    });
</script>
```

## Section React

### Construire une modale en React

Pour construire une modale en React en utilisant la balise `<dialog>`, nous allons créer des composants **Modal** spécifiques pour chaque type de modale.

#### Modale ouverte, impossible à fermer

```jsx
import React from "react";
import "./Modal.scss";

const ModalOpenNoClose = () => (
  <dialog open>
    <p>
      Ceci est une modale ouverte par défaut. Il est impossible de la fermer.
    </p>
  </dialog>
);

const App = () => (
  <div>
    <ModalOpenNoClose />
  </div>
);

export default App;
```

#### Modale ouverte qu'on peut fermer mais pas rouvrir

```jsx
import React, { useState } from "react";
import "./Modal.scss";

const ModalOpenCloseOnce = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <dialog open>
      <p>
        Ceci est une modale ouverte qu'il est possible de fermer, mais pas de
        rouvrir.
      </p>
      <button onClick={() => setIsOpen(false)}>Fermer</button>
    </dialog>
  );
};

const App = () => (
  <div>
    <ModalOpenCloseOnce />
  </div>
);

export default App;
```

#### Modale fermée, qu'on peut rouvrir et fermer

```jsx
import React, { useState, useRef } from "react";
import "./Modal.scss";

const ModalOpenClose = ({ isOpen, onClose }) => {
  const dialogRef = useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef}>
      <p>Ceci est une modale qui peut être ouverte et fermée.</p>
      <button onClick={onClose}>Fermer</button>
    </dialog>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <ModalOpenClose isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
```

### Explications

- Les composants modaux en React sont définis séparément pour chaque type de comportement souhaité.
- Utilisation de `useState` pour gérer l'état d'ouverture et de fermeture de la modale.
- Utilisation de `useRef` et `useEffect` pour contrôler l'ouverture et la fermeture du `<dialog>` en fonction de l'état `isOpen` dans le dernier exemple.
