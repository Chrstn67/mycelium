# PaleoData : Son histoire

## Introduction

> 🧒Je te présente 𝓗𝓾𝓰𝓸. Il a 5 ans, et c'est un petit bonhomme génial🧒

Hugo est autiste🧠. Cela ne l'empêche pas d'avoir un intérêt particulier pour... 𝑳𝑬𝑺 𝑫𝑰𝑵𝑶𝑺𝑨𝑼𝑹𝑬𝑺🦕

Et tu sais quoi ?

Malgré son tout jeune âge, il a été récemment un sérieux moteur pour moi🙏!

J'adore la paléontologie, aussi. Depuis bambino... Je crois que c'est un domaine qui a fasciné, et qui fascine encore, des millions d'enfants👁.

Et comme toutes les sciences, c'est un domaine dont on ne finira jamais de découvrir et d'approfondir tous les secrets de ces trésors qui reposent sous nos pieds💎.

Alors, voilà : Il y a quelques mois, me trottait au fin fond de mon esprit, un projet web sur les monstres du passé, et l'univers de la paléontologie en général...

Grâce à Hugo, cette source de motivation, je me suis lancé dans un projet web ayant pour but de joindre l'utile à l'agréable...

---

Ce projet c'est **_PaleoData_** !

➡️ [https://chrstn67.github.io/PaleoData/#](https://chrstn67.github.io/PaleoData/#)

L'objectif est d'y centraliser toutes les informations possibles et imaginables sur les monstres du passé, la paléontologie en général, les paléontologues qui ont marqué l'Histoire, l'échelle des temps, etc...

On parle souvent des dinosaures, mais très souvent, on a tendance à oublier qu'**_avant et après_** les dinos, d'autres bestioles étranges ont peut-être foulé le sol sur lequel repose ta maison... Alors j'ai eu envie de répertorier tous ces animaux dans un seul site !

Toujours est-il qu'il s'agit d'un travail titanesque. Et puis c'est un sujet scientifique : On découvre, on met à jour des centaines d'informations par jour... C'est impossible de TOUT savoir sur ce sujet. Donc je te présente un site qui ne sera, dans un sens, jamais terminé 😉.

Tu veux connaitre quelques coulisses de ce projet ? Comment je l'ai réalisé ? Alors, remontons le temps ensemble que je te fasse visiter 🤝 !

Je vais te montrer des images de la _Version 1_, sans m'attarder sur les codes, et je les comparerai avec la _Version 2_ où je te montrerai 2-3 trucs intéressants😋
Je généralise aussi : Je te montre le rendu seulement en version desktop (ordinateur). En mobile, tout est pratiquement placé en colonne.

> Autre précision avant de poursuivre : Ce projet est _100% frontend_, toutes les infos du site sont tapées à la main... Je n'utilise ni backend, ni API, ni base de données... Ne m'en veux pas, c'est un choix voulu et assumé. Merci de le respecter 😊

---

---

## L'idée du projet

J'ai eu l'idée de ce projet durant ma formation en développement web. La toute première ébauche n'était ni plus ni moins, qu'un immense tableau... Je te laisse imaginer la galère :

- Un tableau avec plusieurs colonnes correspondant à l'échelle des temps géologiques, et une colonne avec la liste de quelques animaux... Du code HTML et JS absolument pas optimisé, pas de Frameworks, pas de boucles, pas de rangement, RIEN !

- D'autant plus que lorsque tu crées un site, il se doit d'être _responsive_, adapté à tous types d'écrans ! Un tableau de cette taille _responsive_ ? Oublie 😵😵💫🫥 !

J'avais donc laissé le projet de côté, en attendant d'acquérir d'autres compétences, particulièrement en **React**.

Ce temps de "repos" m'a permis de réfléchir un peu plus précisément à ce que je souhaitais voir apparaitre sur **_PaleoData_** :

- Une page d'accueil
- Une page avec la liste des animaux
- Une "carte d'identité" de chaque animal
- L'échelle des temps géologiques
- La liste des étymologies (car les animaux ont des noms qui trouvent leurs origines dans les langues anciennes)
- Une page de documentation

> Là, j'ai commis une erreur (de p'tit nouveau) qui se répercutera très nettement plus tard🤨🧐...

Ayant compris les concepts de **React**, je m'attaque enfin au projet à proprement parler ! 🥳

---

## Version 1

### NavBar

La première version de la barre de navigation se trouve dans un précédent article :

➡️ [React : Comment réaliser un menu-burger fonctionnel](https://www.linkedin.com/pulse/react-comment-r%2525C3%2525A9aliser-un-menu-burger-fonctionnel-christian-humbert-zoalc/?trackingId=hYk%2B1NKQQdWVzAJ59K8h5w%3D%3D)

### Page d'accueil

La première version de la page d'accueil était celle-ci :

![Page d'accueil, V1](./Images/PaleoData/HomePage-V1.png)

Bon, tu en conviendras, les couleurs sont ternes. C'était voulu, pour coller avec le côté sableux, terreux, fossiles...

Donc, une HomePage en deux parties, celle de gauche avec un rappel à la **loi RGPD**, et une image aléatoire d'un des animaux présent sur le site.

Sur la partie droite, une liste de boutons revoyant à l'adresse mail de PaleoData, en fonction de la demande : J'avais programmé pour qu'il y ait une trame de la demande dans le mail, en fonction du bouton sur lequel on clique.

En _format-mobile_, tout était placé en colonne.

Un peu rébarbatif, on ne sait pas trop ce qu'on peut trouver sur le site...

J'y ai fini par y trouver une sorte de lassitude, un côté trop old-school... Cela ne me correspondait pas franchement...

---

---

> **_NB_** : Le RGPD est un règlement européen entré en vigueur le 25 mai 2018 qui vise à renforcer la protection des données personnelles des citoyens de l'Union européenne. Ses principaux objectifs sont : 1) Protéger la vie privée des citoyens européens en encadrant de manière plus stricte la collecte et l'utilisation de leurs données personnelles. 2) Responsabiliser les organismes publics et privés qui traitent ces données et les sanctionner en cas de manquement. 3) Répondre à une demande citoyenne de plus de transparence et de contrôle sur l'utilisation de leurs données. 4) Protéger les personnes vulnérables.

> La loi RGPD s'applique à tout organisme, quelle que soit sa taille ou son activité, qui collecte ou traite des données personnelles de citoyens européens, que l'entreprise soit établie en Europe ou non. Il accorde de nouveaux droits aux individus, comme le droit d'accès, de rectification, d'effacement, de portabilité de leurs données, ainsi que le droit d'être informé en cas de violation. À l'inverse, le RGPD interdit la collecte de certaines catégories de données dites "sensibles" comme les opinions politiques ou l'orientation sexuelle. Les organismes doivent être en mesure de prouver à tout moment leur conformité au RGPD, notamment en tenant un registre des activités de traitement.. Des sanctions financières lourdes peuvent être appliquées en cas de non-respect.

---

---

### Les filtres des animaux

![Filtre des animaux, V1](./Images/PaleoData/Filtre-animaux-V1.png)

Permettant d'afficher les animaux en fonction de ce que l'on recherche, c'est peut-être le composant qui a le moins changé, car il n'y aura qu'une seule petite modification dans la V2.

En _format-mobile_, les options de filtres étaient (et sont toujours) en colonne.

### Liste des animaux

J'ai toujours voulu la liste des animaux sous forme de cartes prenant tout l'espace d'écran disponible.

En format-mobile, les cartes sont placées en colonne.

Dans la V1, je trouvais que cela manquait de modernité, de clarté... de vie. Les images n'étaient pas mises en valeur...

![Filtre des animaux, V1](./Images/PaleoData/Liste-animaux-V1.png)

### La carte d'identité de l'animal sélectionné

![Filtre des animaux, V1](./Images/PaleoData/AnimalCard-V1.png)

Le code couleur était toujours présent, mais je trouvais qu'il y avait un décalage des éléments entre les deux parties (gauche et droite) de l'écran. Et d'une manière générale, la place n'était pas du tout optimisée : trop de perte...

Les infos y étaient, mais je trouvais que ce composant manquait aussi un peu de vie : le nom de l'animal n'était pas mis en valeur, les informations géologiques ternes (j'aurais voulu les animer un peu plus)...

En _format-mobile_, tout était placé en colonne, donc la perte d'espace n'était pas visible.

Quant aux mentions, "_Taille (Longueur)_" et "_Taille (hauteur)_"... Trop verbeux...

Dans ce composant, il y aussi la taxonomie de l'animal. Je l'ai fait sous forme de tableau, et comme il n'y a que deux colonnes, ce n'est pas compliqué de le gérer en _responsive_, où les lignes sont disposées en une seule colonne.

Dans la V2, rien n'a changé :

![Taxonomie, V1+V2](./Images/PaleoData/Taxonomie-V1-V2.png)

### L'échelle des temps (Timeline)

Il faut savoir qu'en géologie, les spécialistes divisent le temps en **_ères_** (qui sont des divisions des **_éons_**, mais restons simples). Ces **_ères_** sont divisées en **_périodes_**. Ces **_périodes_** sont divisées en **_époques_**, qui sont elles-même divisées en **_étages_**... (Ça va😜?)

Par exemple, si tu parles des dinosaures du **Jurassique**, tu parles d'une _période_ et non d'une _ère_, comme on l'entend dans certains documentaires, ou certains films.

Bref, dans **PaleoData**, il faut que tu t'imagines une ligne du temps mise dans des boîtes... Et je voulais garder cette façon de penser...

Donc, quand tu cliques sur une **_ère_**, s'afficheront les **_périodes_**. Si tu cliques sur les périodes, s'afficheront les **_époques_**. Et si tu cliques sur les **_époques_**, s'afficheront les **_étages_**... Et à chaque fois, tu auras un bouton d'ℹnformation sur l'élément ciblé.

Un peu fastidieux, mais bon... Cela me convient...

![Timeline, V1](./Images/PaleoData/Timeline-V1.png)

Le problème de cette timeline, ce sont les couleurs... Je t'explique pourquoi plus tard⏰.

### Les modales d'informations des éléments de la frise

Rien de particulier : Elles n'ont pas changées. À ceci près que j'avais fait une petite erreur de sémantique : quand on code une modale en HTML, on utilise la balise `<dialog>`...

Au click sur l'icône ℹ️, une modale s'affiche pour livrer des informations sur l'élément qui t'intéresse.

![Modale Timeline, V1+V2](./Images/PaleoData/ModaleTimeline-V1-V2.png)

### Étymologie

Les noms des êtres vivants tiennent bien souvent leur racines dans les langues anciennes (principalement des racines grecques et latines). Les montres du passé ne font pas exception.

Donc plutôt que de devoir chercher un animal (qui n'est peut-être même pas encore inclus dans le site) pour trouver l'étymologie de son nom, j'ai préféré faire une page pour cela.

Une bête tableau (encore...)

En _format-mobile_, j'ai juste réduit la taille des colonnes... Mais identiquement aux autres composant, je trouve que cela manquait de vie, un côté ludique...

![Etymologie, V1](./Images/PaleoData/Etymologie-V1.png)

### Documentation

Rien que des _summary_ et des _details_...

En gros, tu cliques sur une ligne (_summary_), cela te déroule des infos (_details_).

J'avais rangé les informations par catégories (triées de manière alphabétique) dans lesquelles apparaissent les notions (aussi triées alphabétiquement)...

Quand il n'y a pas beaucoup d'informations, cela peut être une bonne idée. Mais quand il y en a beaucoup, cela peut devenir vite compliqué et décourageant pour l'utilisateur.

![Documentation, V1](./Images/PaleoData/Documentation-V1.png)

> **OK ! Jusque-là, est-ce que tu arrives à t'imaginer cette premier version de mon PaleoData😄 ? Qu'est-ce que tu en penses ?**

Je vais maintenant reprendre composant par composant, et te montrer le rendu final avec des p'tits extraits de codes intéressants qui peuvent t'être utiles dans tes projets.

Chaud 💪 ?

---

## Version 2

Ah, au fait : Je t'avais dit plus haut que j'avais commis une erreur, lorsque j'avais planché ce que je voulais... La trame avec les idées des pages était là, ce n'était pas le soucis.

Mais j'ai oublié de faire quelque chose de **CA-PI-TA-LE** : un **_cahier des charges_**... J'ai commencé à coder tête baissée... Je n'avais que l'idée du composant, mais je ne réfléchissait pas au design, aux couleurs ou encore à la disposition des éléments...

C'est un peu pour cela que j'ai dû travailler sur une refonte (surtout visuelle) du site...

Commençons...

### NavBar

En format _desktop_, la barre de navigation n'a pas changé, si ce n'est quelques retouches visuelles.

Le gros de changement de composant est en _format-mobile_ : la NavBar se trouve à présent... **_en bas_**.

(Dans l'article que je t'évoquais plus haut concernant le menu-burger, en format-mobile, ce menu se situait... **_en haut_**...)

> C'est une question d' "_expérience utilisateur_" : Si tu prends ton téléphone d'une seule main, tu auras du mal à accéder au menu si il se situe en haut. Alors qu'en bas, ce sera nettement plus facile de cliquer sur les icônes ou onglets qui t'intéressent... Cette manière de faire commence à se démocratiser : Si tu utilises LinkedIn ou WhatsApp, tu as dû le constater récemment... Consulte ce site, si tu veux plus de renseignements à ce sujet : https://www.olybop.fr/dossier-ux-mobile-navigation-bottom/

Donc, de mon côté, je me suis arrangé pour que ma NavBar soit placée **_en bas_**.

J'ai donc mis des icônes et placé le texte en plus petit en-dessous (les icônes apparaissent aussi en _desktop_) :

![Navbar, V2](./Images/PaleoData/Navbar-V2.png)

Extrait de code SCSS :

```scss
.navbar {
  //...

  @media screen and (max-width: 768px) {
    border-radius: 0.5em;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 0 1.5em;
    box-sizing: border-box;
    background-color: transparent;
  }

  //...
}
```

Ainsi, dès que l'écran est inférieur ou égal à 768 pixels, la barre de navigation se place en bas, et fixée au bas de l'écran (**_position: fixed; bottom: 0;_**). Les autres propriétés permettent le placement au centre de l'écran, et de prendre l'espace qu'on laisse à cette NavBar.

Pour le placement du texte sous l'icône... À toi de jouer😉!

### Page d'accueil

Je t'avoue que la page d'accueil ne m'inspirait pas... Je cherchais trop compliqué...

Donc, je me suis dit que la simplicité devait régler le soucis...

Pourquoi pas cette version ?

Des encadrés avec menant vers les pages du site, et puis surtout, un bandeau avec un mot de bienvenue animé. Un petit changement de couleur, pour que ce soit plus clair, mais toujours en gardant un côté "fossile"...

![HomePage, V2](./Images/PaleoData/HomePage-V2.png)

### Les filtres des animaux

![Filtre des animaux, V2](./Images/PaleoData/Filtre-animaux-V2.png)

Bon, là, je t'avais prévenu, pas de gros changements, si ce n'est que j'ai supprimé le choix d'afficher ou non les filtres. J'y ai mis un espacement différent, mais à part ça...
