---
tags: [Sécurité, Attaques, Mot de passe]
---

# Sécuriser sa Connexion avec un bon Mot de Passe

Les mots de passe sont souvent la première ligne de défense pour protéger les comptes et les données personnelles. Un mot de passe faible peut compromettre la sécurité de tes informations, tandis qu'un mot de passe solide peut grandement renforcer la sécurité. Ce cours te guidera à travers les principes pour créer des mots de passe sécurisés, des exemples d'attaques courantes, et les meilleures pratiques pour te protéger.

## 1. Pourquoi les mots de passe sont-ils importants ?

Les mots de passe jouent un rôle crucial dans la protection de tes comptes en ligne. Ils empêchent les personnes non autorisées d'accéder à des informations sensibles, telles que tes emails, tes comptes bancaires et tes réseaux sociaux. Un mot de passe robuste réduit le risque d'accès non autorisé et de compromission de tes données.

## 2. Caractéristiques d'un Bon Mot de Passe

### Longueur

Un mot de passe plus long est généralement plus sécurisé. Les experts recommandent un mot de passe qui est supérieur à 12 voire 16 caractères (on parle alors de 'phrase de passe').

### Complexité

Un mot de passe complexe utilise une combinaison de lettres majuscules, de lettres minuscules, de chiffres et de symboles spéciaux.

:::note[Complexité du Mot de Passe]
C'est ce qu'on appelle l'**entropie** d'un mot de passe.
:::

### Unicité

Chaque site où tu as besoin de te connecter devrait avoir un mot de passe unique pour éviter que la compromission d'un mot de passe ne compromette d'autres comptes.

### Exemples de Bonnes Pratiques

#### Exemple de Bon Mot de Passe

```text
@T3rR!p&5#2u^Xl9
```

Ce mot de passe est long, complexe et contient une variété de caractères.

#### Exemple de Mauvais Mot de Passe

```text
password123
```

Ce mot de passe est court, simple, et très courant, ce qui le rend facile à deviner.

## 3. Attaques Courantes sur les Mots de Passe

### Attaque par Force Brute

Une attaque par force brute consiste à essayer toutes les combinaisons possibles jusqu'à trouver le bon mot de passe. Cette méthode est efficace contre les mots de passe courts et simples.

Les _hackers_ utilisent des codes qui effectuent la recherche d'un mot de passe. Plus le mot de passe est simple, plus le robot sera capable de le trouver rapidement, parfois en quelques secondes.

#### Exemple

Si un attaquant tente toutes les combinaisons possibles pour un mot de passe de 4 chiffres, il aura 10 000 possibilités à essayer.

:::warning[Tableau]

| Nombre de caractères | Nombres seulement | Lettres minuscules     | Lettres majuscules et minuscules | Nombres, Lettres majuscules et minuscules | Nombres, Lettres majuscules et minuscules, Caractères spéciaux |
| -------------------- | ----------------- | ---------------------- | -------------------------------- | ----------------------------------------- | -------------------------------------------------------------- |
| 4                    | Immédiat          | Immédiat               | 3 secondes                       | 6 secondes                                | 9 secondes                                                     |
| 5                    | Immédiat          | 4 secondes             | 2 minutes                        | 6 minutes                                 | 10 minutes                                                     |
| 6                    | Immédiat          | 2 minutes              | 2 heures                         | 6 heures                                  | 12 heures                                                      |
| 7                    | 4 secondes        | 50 minutes             | 4 jours                          | 2 semaines                                | 1 mois                                                         |
| 8                    | 37 secondes       | 22 heures              | 8 mois                           | 3 ans                                     | 7 ans                                                          |
| 9                    | 6 minutes         | 3 semaines             | 33 ans                           | 161 ans                                   | 479 ans                                                        |
| 10                   | 1 heure           | 2 ans                  | 1 000 ans                        | 9 000 ans                                 | 33 000 ans                                                     |
| 11                   | 10 heures         | 44 ans                 | 89 000 ans                       | 618 000 ans                               | 2 Millions d'années                                            |
| 12                   | 4 jours           | 1 000 ans              | 4 Millions d'années              | 38 Millions d'années                      | 164 Millions d'années                                          |
| 13                   | 1 mois            | 29 000 ans             | 241 Millions d'années            | 2 Milliards d'années                      | 11 Milliards d'années                                          |
| 14                   | 1 an              | 766 000 ans            | 12 Milliards d'années            | 147 Milliards d'années                    | 805 Milliards d'années                                         |
| 15                   | 12 ans            | 19 Millions d'années   | 652 Milliards d'années           | 9 Billions d'années                       | 56 Billions d'années                                           |
| 16                   | 119 ans           | 517 Millions d'années  | 33 Billions d'années             | 566 Billions d'années                     | 3 Quadrillons                                                  |
| 17                   | 1 000 ans         | 13 Milliards d'années  | 1 Quadrillion d'années           | 35 Quadrillons d'années                   | 276 Quadrillons d'années                                       |
| 18                   | 11 000 ans        | 350 Milliards d'années | 91 Quadrillons d'années          | 2 Quintillons d'années                    | 19 Quintillons d'années                                        |

:::note
Il s'agit ici d'estimations !!

Même si le mot de passe `azertyuiop` est, d'après ce tableau, estimé à sa découverte au bout de 2 ans par un robot, il est découvert bien plus rapidement, à raison de quelques secondes car il s'agit d'un mot de passe courant.

:::

:::tip[Exemples]

- Mot de passe : `soleil` ; Temps : **2 minutes**
- Mot de passe : `Soleil` ; Temps : **2 heures**

---

- Mot de passe : `rangetachambre` ; Temps : **766 000 ans**
- Mot de passe : `RangeTaChambre` ; Temps : **12 Milliards d'années**

:::

#### Comment se protéger ?

1. **Utilise des mots de passe longs et complexes** pour augmenter le nombre de combinaisons possibles.
2. **Mets en place des mécanismes de limitation** des tentatives de connexion et de verrouillage de compte après plusieurs échecs.

### Attaque par Dictionnaire

Une attaque par dictionnaire utilise une liste de mots de passe courants ou prévisibles pour accéder aux comptes. Les mots de passe simples ou basés sur des mots courants sont particulièrement vulnérables.

#### Exemple

Des mots de passe comme `123456`, `qwerty`, ou `password` sont souvent utilisés dans les attaques par dictionnaire.

#### Comment se protéger ?

1. **Évite les mots de passe courants** ou facilement devinables.
2. **Utilise des générateurs de mots de passe** pour créer des mots de passe complexes que les dictionnaires ne couvrent pas.

## 4. Utilisation des Gestionnaires de Mots de Passe

### Qu'est-ce qu'un Gestionnaire de Mots de Passe ?

Un gestionnaire de mots de passe est un outil qui stocke et gère les mots de passe de manière sécurisée. Il peut générer des mots de passe forts et les remplir automatiquement sur les sites web.

#### Outil pour tester ses mots de passe

CodePen : [Password Strength Checker](https://codepen.io/Chrstn67/pen/WNqOOZX)

### Avantages

- **Stockage Sécurisé** : Les gestionnaires de mots de passe utilisent le cryptage pour protéger les mots de passe stockés.
- **Génération de Mots de Passe** : Ils peuvent créer des mots de passe complexes et uniques pour chaque compte.
- **Remplissage Automatique** : Ils peuvent automatiquement remplir les formulaires de connexion, réduisant les risques de saisie de mots de passe faibles.

## 5. Authentification Multi-Facteurs (MFA)

### Qu'est-ce que l'Authentification Multi-Facteurs ?

L'authentification multi-facteurs (MFA) ajoute une couche de sécurité supplémentaire en demandant plus qu'un seul mot de passe pour accéder à un compte. Cela peut inclure un code envoyé par SMS, une application d'authentification, ou une empreinte digitale.

#### Exemple d'Authentification Multi-Facteurs

1. **Mot de Passe** : La première couche.
2. **Code SMS** : Un code envoyé sur ton téléphone pour confirmer ton identité.
3. **Application d'Authentification** : Un code généré par une application comme _Google Authenticator_ ou _Authy_.

### Avantages

- **Renforcement de la Sécurité** : Même si un attaquant obtient ton mot de passe, il aura besoin d'un second facteur pour accéder à ton compte.
- **Protection contre les Compromissions de Mot de Passe** : MFA peut prévenir les accès non autorisés même en cas de mot de passe compromis.

## Ça se passe comment quand je m'inscris sur un site ?

Quand tu t'inscris sur un site, tu dois bien souvent renseigner un mot de passe suivant les critères évoqués plus haut. Mais ensuite, que devient-il ?

:::info[Il part en base de donnée]

Simplifions : Imagine que ton mot de passe soit `blablaExempleFastoc43*/+`. **Il ne sera pas stocké ainsi en base de donnée** : Ton mot de passe n'apparaitra jamais en clair dans les bases de données et donc invisible pour les administrateurs. Ce mot de passe sera _hashé_.

:::tip[Le *hashage* d'un mot de passe, c'est comme si tu prenais une pomme de terre.]

Pour faire de la purée, tu dois écraser ta patate pour la rendre bien lisse et qu'il n'y ait pas de morceau de pomme de terre.

- La pomme de terre, c'est ton mot de passe `blablaExempleFastoc43*/+`.
- La purée, c'est le _hashage_ de ton mot de passe : Impossible de retrouver l'original.

Selon ce qui est demandé dans le Cahier des Charges de ton client, les administrateurs verront une ribambelle de caractères qui est bien ton mot de passe !
Selon le langage utilisé, le code sera différent mais voici à quoi ressemble un mot de passe hashé :

`blablaExempleFastoc43*/+` devient par exemple `$68fd96q8pkfdkFL6956C#BS230LLDMpske9AED`

Bon courage pour retrouver l'original...

:::danger

Il peut arriver que tu perdes un mot de passe. Tu as bien souvent un lien "_Mot de passe oublié ?_" en bas de tes formulaires de connexion.

- Si le site t'envoie un mail avec un mot de passe de rechange (et que tu peux rechanger plus tard) ressemblant à `wp9oep°kl€69HNZfd88`, **_c'est parfait ! Le site est fiable._**
- Si le site t'envoie un mail avec ton ancien mot de passe tel que tu l'avais renseigné auparavant (style `Ja|Oubli3M0n-MDP!`) :

  > **_FUIS !_** **Ton mot de passe a été stocké en clair, donc les administrateurs peuvent facilement faire ce qu'ils veulent sur ton compte** (voire d'autres sites si tu as le même mot de passe pour plusieurs sites, ce qui est totalement déconseillé)

:::

## Conclusion

La sécurité des mots de passe est essentielle pour protéger tes comptes en ligne. En utilisant des mots de passe longs, complexes, et uniques, en tirant parti des gestionnaires de mots de passe, et en implémentant l'

authentification multi-facteurs, tu peux significativement améliorer la sécurité de tes informations personnelles. Adopte ces pratiques dès maintenant pour renforcer la protection de tes comptes contre les attaques courantes.
