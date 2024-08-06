---
tags: [Sécurité, Attaques]
---

# Les Attaques dans le Développement Web

Le développement web est passionnant mais comporte des risques importants. Pour garantir la sécurité de tes applications et protéger les données des utilisateurs, il est crucial de comprendre les différents types d'attaques. Voici un guide détaillé sur les quatre principales menaces en matière de sécurité web, avec des exemples et des conseils pour te protéger.

## 1. Injection SQL

### Qu'est-ce que c'est ?

L'injection SQL est une attaque où un attaquant insère du code SQL malveillant dans une requête SQL. Cela peut permettre à l'attaquant de manipuler, extraire ou supprimer des données dans la base de données.

### Exemple

Imaginons un formulaire de connexion qui utilise le code SQL suivant pour vérifier les informations de l'utilisateur :

```sql
SELECT * FROM utilisateurs WHERE nom_utilisateur = 'user' AND mot_de_passe = 'pass';
```

Si un attaquant entre `' OR '1'='1` comme mot de passe, la requête devient :

```sql
SELECT * FROM utilisateurs WHERE nom_utilisateur = 'user' AND mot_de_passe = '' OR '1'='1';
```

Cette requête est toujours vraie, permettant à l'attaquant de se connecter sans avoir les bons identifiants.

### Comment s'en prémunir ?

Utilise des **requêtes préparées** ou des **requêtes paramétrées** pour éviter que les données entrées par l'utilisateur ne soient traitées comme du code SQL.

#### Exemple avec PHP et MySQLi

```php
$stmt = $conn->prepare("SELECT * FROM utilisateurs WHERE nom_utilisateur = ? AND mot_de_passe = ?");
$stmt->bind_param("ss", $nom_utilisateur, $mot_de_passe);
$stmt->execute();
$result = $stmt->get_result();
```

Avec des requêtes préparées, les entrées utilisateur sont traitées comme des données et non comme des instructions SQL.

## 2. Cross-Site Scripting (XSS)

### Qu'est-ce que c'est ?

Le Cross-Site Scripting (XSS) est une attaque où un attaquant injecte du code JavaScript malveillant dans une page web. Ce code est ensuite exécuté dans le navigateur des autres utilisateurs, ce qui peut compromettre leurs données ou leurs sessions.

### Exemple

Supposons une application de forum où les utilisateurs peuvent laisser des commentaires. Si l'application n'échappe pas les entrées, un attaquant peut soumettre un commentaire comme :

```html
<script>
  alert("Vous avez été piraté !");
</script>
```

Ce code JavaScript s'exécutera chaque fois qu'un utilisateur consulte le commentaire, affichant une alerte.

### Comment s'en prémunir ?

1. **Échapper les données** avant de les afficher pour éviter l'exécution de code malveillant. Convertis les caractères spéciaux en entités HTML.

#### Exemple avec JavaScript

```javascript
function escapeHTML(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
```

2. **Utilise les en-têtes de sécurité** comme `Content-Security-Policy` (CSP) pour restreindre les ressources que les pages peuvent charger et exécuter.

## 3. Cross-Site Request Forgery (CSRF)

### Qu'est-ce que c'est ?

Le Cross-Site Request Forgery (CSRF) est une attaque où un attaquant induit un utilisateur authentifié à exécuter des actions non souhaitées sur un site où il est déjà authentifié.

### Exemple

Supposons que tu aies une page de modification de mot de passe sur ton site web. Un attaquant pourrait créer une page malveillante avec le code suivant :

```html
<form action="https://tonsite.com/changer_mdp" method="POST">
  <input type="hidden" name="nouveau_mdp" value="motdepassecompromis" />
  <input type="submit" value="Changer le mot de passe" />
</form>
```

Si un utilisateur connecté visite cette page, le mot de passe sera changé sans qu'il le sache.

### Comment s'en prémunir ?

1. **Utilise des tokens CSRF** : génère un token unique pour chaque session et inclue-le dans les formulaires.

#### Exemple avec PHP

```php
// Générer un token
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));

// Inclure le token dans un formulaire
echo '<input type="hidden" name="csrf_token" value="' . $_SESSION['csrf_token'] . '">';
```

2. **Vérifie le token à la réception** pour t'assurer que la requête provient de la même session.

## 4. Attaque par Force Brute

### Qu'est-ce que c'est ?

Une attaque par force brute est une méthode où un attaquant essaie toutes les combinaisons possibles de mots de passe ou de clés pour accéder à un compte ou une ressource protégée.

### Exemple

Un attaquant peut utiliser un script pour tenter des milliers de combinaisons de mots de passe jusqu'à trouver le bon.

### Comment s'en prémunir ?

1. **Limite les tentatives de connexion** en mettant en place un verrouillage de compte après un certain nombre d'échecs de connexion.

#### Exemple avec PHP

```php
if ($tentatives >= 5) {
  // Bloquer la connexion ou introduire un délai
}
```

2. **Encourage l'utilisation de mots de passe forts** et exige leur changement régulier.

3. **Implémente l'authentification multi-facteurs (MFA)** pour ajouter une couche de sécurité supplémentaire.

## Conclusion

La sécurité dans le développement web est essentielle pour protéger les données et garantir le bon fonctionnement des applications. En comprenant les différents types d'attaques et en mettant en œuvre des mesures préventives appropriées, tu contribueras à créer des applications plus sûres et résilientes. Reste à jour avec les dernières vulnérabilités et pratiques de sécurité pour assurer la protection continue de tes projets.
