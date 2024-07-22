---
tags: [JavaScript, React, Composant]
---

# Mettre en valeur un élément durant un certain temps

Ce composant permet de mettre en valeur une donnée durant un temps donné.

Il affiche une liste d'animaux ajoutés au cours des 4 derniers jours. Si aucun animal n'a été ajouté récemment, un message informatif est affiché à la place. Les _PropTypes_ garantissent que les données reçues sont bien conformes aux attentes du composant.

```jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NewAnimal.scss";

const NewAnimal = ({ animals }) => {
  const newAnimals = animals.filter((animal) => {
    const dateAjoutee = new Date(animal.date_ajout);
    const dateActuelle = new Date();
    const uneSemaine = 4 * 24 * 60 * 60 * 1000; // 4 jours en millisecondes

    return dateActuelle - dateAjoutee <= uneSemaine;
  });

  if (newAnimals.length === 0) {
    return (
      <h5>
        De nouveaux animaux seront bientôt mis en ligne. Contacte-nous pour
        proposer tes idées !
      </h5>
    );
  }

  return (
    <section className="new-animal">
      <h3 className="h3-title">Nouveaux animaux</h3>
      <ul>
        {newAnimals.map((animal) => (
          <li key={animal.nom}>
            <Link to={`/animal/${encodeURIComponent(animal.nom)}`}>
              <img src={animal.image_url} alt={animal.nom} />
              <h3>{animal.nom}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

NewAnimal.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      nom: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      dateAjoutée: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewAnimal;
```

## Explications

### Importations

```jsx
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NewAnimal.scss";
```

- **PropTypes** est utilisé pour valider les types de propriétés du composant.
- **Link** est utilisé pour la navigation entre les pages, fourni par _react-router-dom_.
- Le fichier SCSS **NewAnimal.scss** contient les styles pour ce composant.

### Définition du composant

```jsx
const NewAnimal = ({ animals }) => {
  const newAnimals = animals.filter((animal) => {
    const dateAjoutee = new Date(animal.date_ajout);
    const dateActuelle = new Date();
    const uneSemaine = 4 * 24 * 60 * 60 * 1000; // 4 jours en millisecondes

    return dateActuelle - dateAjoutee <= uneSemaine;
  });
```

- Le composant est une fonction qui accepte une prop **animals**, un tableau d'objets représentant des animaux.
- **newAnimals** est un tableau filtré qui ne contient que les animaux ajoutés au cours des 4 derniers jours. Cette période est calculée en millisecondes.

### Condition pour l'affichage

```jsx
if (newAnimals.length === 0) {
  return (
    <h5>
      De nouveaux animaux seront bientôt mis en ligne. Contacte-nous pour
      proposer tes idées !
    </h5>
  );
}
```

- Si aucun animal n'a été ajouté au cours des 4 derniers jours, un message informatif est affiché.

### Affichage des nouveaux animaux

```jsx
  return (
    <section className="new-animal">
      <h3 className="h3-title">Nouveaux animaux</h3>
      <ul>
        {newAnimals.map((animal) => (
          <li key={animal.nom}>
            <Link to={`/animal/${encodeURIComponent(animal.nom)}`}>
              <img src={animal.image_url} alt={animal.nom} />
              <h3>{animal.nom}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
```

- Si des animaux ont été ajoutés récemment, une section contenant la liste de ces animaux est affichée.
- Chaque animal est affiché avec un lien (**Link**) vers une page dédiée à cet animal.
- L'URL est encodée avec **encodeURIComponent** pour gérer les noms contenant des caractères spéciaux.

### Validation des PropTypes

```jsx
NewAnimal.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      nom: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      date_ajout: PropTypes.string.isRequired,
    })
  ).isRequired,
};
```

- La prop **animals** doit être un tableau d'objets avec des propriétés spécifiques : **_nom_** (chaîne de caractères), **_image_url_** (chaîne de caractères) et **_date_ajout_** (chaîne de caractères). Toutes ces propriétés sont requises (**isRequired**).

### Exportation du composant

```jsx
export default NewAnimal;
```

- Le composant **NewAnimal** est exporté pour être utilisé dans d'autres parties de l'application.
