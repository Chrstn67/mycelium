# Modales

### Qu'est-ce qu'une **modale** ?

[Démonstration sur CodePen](https://codepen.io/Chrstn67/pen/VwJeQjQ)

:::note
En HTML, une **modale** (ou _boîte de dialogue_) est une fenêtre contextuelle qui apparaît au-dessus de la page web principale, obligeant les utilisateurs à interagir avec elle avant de pouvoir revenir à la page principale. Les modales sont souvent utilisées pour afficher des informations importantes, recueillir des entrées utilisateur ou obtenir une confirmation avant d'exécuter une action.

Les modales peuvent contenir divers éléments tels que du texte, des images, des formulaires, des boutons, etc.
:::

## Section JavaScript Vanilla

### Construire une modale

Pour construire une modale en HTML, on utilise la balise `<dialog>`. On peut ajouter l'attribut `open` pour que la modale soit ouverte par défaut.

```html
<dialog open>
  Ceci est une modale ouverte par défaut. Il est impossible de la fermer.
</dialog>
```

### Pouvoir fermer une modale

Pour rendre une modale fermable, nous devons ajouter un bouton et du code JavaScript pour gérer sa fermeture.

```html
<dialog open id="maModale">
  Ceci est une modale ouverte qu'il est possible de fermer, et de rouvrir par la
  suite.
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

### Ouvrir une modale

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

Pour construire une modale en React en utilisant la balise `<dialog>`, nous allons créer un composant **Modal** qui utilise l'état pour gérer son ouverture et sa fermeture.

```jsx
import React, { useRef, useState } from "react";
import "./Modal.scss";

const Modal = ({ isOpen, onClose }) => {
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
      <p>Ceci est une modale en React.</p>
      <button onClick={onClose}>Fermer</button>
    </dialog>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Ouvrir la modale</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
```

### Explications

- Le composant `Modal` utilise une référence (`useRef`) pour accéder directement à l'élément `<dialog>`.
- Le hook `useEffect` est utilisé pour ouvrir (`showModal()`) ou fermer (`close()`) la modale en fonction de l'état `isOpen`.
- Dans le composant `App`, nous gérons l'état `isModalOpen` avec `useState`.
- La fonction `openModal` définit `isModalOpen` à `true` pour ouvrir la modale, tandis que `closeModal` définit `isModalOpen` à `false` pour la fermer.

Pour ajouter des styles à la modale, vous pouvez utiliser CSS :

```css
dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

dialog p {
  margin: 0;
  padding: 10px;
  font-size: 16px;
}

dialog button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

dialog button:hover {
  background-color: #0056b3;
}
```
