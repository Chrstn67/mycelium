---
tags: [IDE, Visual Studio Code, Plugin, Obsidian, GitHub]
---

# Créer et soumettre un plugin Obsidian

## Qu'est-ce qu'Obsidian ?

**Obsidian** est une application de gestion des connaissances personnelles et une application de prise de notes qui fonctionne sur des fichiers Markdown. Il permet de créer des liens internes entre les notes, facilitant ainsi une navigation non linéaire et une visualisation graphique des connexions entre idées.

L'application est gratuite pour un usage personnel et dispose d'une **banque de plugins** qui permet aux utilisateurs d'ajouter des fonctionnalités ou de personnaliser leur expérience.

:::note[Tu peux télécharger Obsidian ici]
[**Obsidian**](https://obsidian.md/download)
:::

Dans cet article, nous allons apprendre à :

1. **Créer un plugin pour Obsidian.**
2. **Tester et activer ce plugin.**
3. **Soumettre le plugin à la communauté Obsidian.**

## 1. Préparer l'environnement de développement

Avant de commencer, assure-toi d'avoir installé les outils suivants :

- **Git** : pour cloner des dépôts et versionner ton code.
- **Node.js** : pour gérer les dépendances et compiler ton plugin.
- **Visual Studio Code (ou un autre éditeur de texte)** : pour éditer le code.

### ⚠️ Recommandations importantes

Lorsque tu développes un plugin, ne travaille jamais directement dans ton coffre (vault) principal. Crée un coffre séparé dédié au développement des plugins pour éviter toute perte de données.

---

## 2. Créer ton premier plugin Obsidian

### Étape 1 : Télécharger un exemple de plugin

Commence par cloner un plugin exemple proposé par l'équipe d'Obsidian :

1. Ouvre un terminal et navigue dans le répertoire de ton coffre de développement :
   ```bash
   cd path/to/vault
   mkdir -p .obsidian/plugins
   cd .obsidian/plugins
   ```
2. Clone le dépôt de l'exemple de plugin :
   ```bash
   git clone https://github.com/obsidianmd/obsidian-sample-plugin.git
   ```

### Étape 2 : Installer et compiler le plugin

1. Accède au dossier du plugin :
   ```bash
   cd obsidian-sample-plugin
   ```
2. Installe les dépendances nécessaires :
   ```bash
   npm install
   ```
3. Lance la commande suivante pour surveiller les modifications et recompiler automatiquement :
   ```bash
   npm run dev
   ```

Une fois cette étape terminée, le fichier `main.js` contenant le code compilé devrait apparaître.

---

## 3. Activer et personnaliser ton plugin

### Étape 1 : Activer le plugin dans Obsidian

1. Ouvre les **Paramètres** d’Obsidian.
2. Va dans **Plugins de la communauté** et active-les.
3. Sous **Plugins installés**, active le plugin exemple.

### Étape 2 : Modifier le plugin pour l’adapter

#### Modifier le fichier `manifest.json`

Ce fichier contient les métadonnées du plugin. Modifie-le comme suit :

- **`id`** : identifiant unique, par exemple `"mon-premier-plugin"`.
- **`name`** : nom lisible pour les utilisateurs.
- **`description`** : une courte description.

#### Ajouter une fonctionnalité : un message de bienvenue

Dans le fichier `main.ts`, ajoute cette fonctionnalité à la méthode `onload()` pour afficher un message lorsque l’utilisateur clique sur une icône :

```typescript
import { Notice, Plugin } from "obsidian";

export default class MonPremierPlugin extends Plugin {
  async onload() {
    this.addRibbonIcon("dice", "Dire Bonjour", () => {
      new Notice("Bonjour, Obsidian !");
    });
  }

  onunload() {
    console.log("Plugin désactivé");
  }
}
```

Recharge le plugin (via le panneau des plugins ou avec la commande **Recharger sans sauvegarder**) pour voir les changements.

:::warning[Utilise l'API d'Obsidian]

Bien que les plugins se codent en _JavaScript_ ou en _TypeScript_, il est important d'utiliser la syntaxe de l'[API d'Obsidian](https://docs.obsidian.md/Home)

:::

---

## 4. Soumettre ton plugin à la communauté

### Étape 1 : Préparer les fichiers nécessaires

Avant de soumettre, vérifie que ton dépôt contient les fichiers suivants :

1. **README.md** : une description claire de ton plugin et de son usage.
2. **LICENSE** : la licence de ton plugin (utilise par exemple la licence MIT).
3. **manifest.json** : les métadonnées de ton plugin.
4. **main.js** : le code compilé de ton plugin.

---

### Ajout d'un plugin au répertoire Obsidian

Les champs `id`, `name`, `author` et `description` définissent comment ton plugin apparaît aux utilisateurs. Ces champs doivent correspondre aux propriétés dans ton fichier manifeste.

- **`id`** : Il doit être unique à ton plugin. Vérifie dans `community-plugins.json` qu'aucun autre plugin n'a le même identifiant. Attention : l'`id` ne peut pas contenir le mot `obsidian`.
- **`repo`** : C'est le chemin d'accès à ton dépôt GitHub. Par exemple, si ton dépôt GitHub est situé à `https://github.com/ton-nom-utilisateur/ton-repo`, le chemin sera `ton-nom-utilisateur/ton-repo`.
- N'oublie pas d'ajouter une virgule après l'accolade fermante `}` de l'entrée précédente.

### Étape 1 : Publier ton plugin sur GitHub

1. Crée un dépôt sur [GitHub](https://github.com).
2. Accède à ton dépôt GitHub : **Paramètres > Actions > Général > Workflow permissions** et sélectionne **Read and Write permissions**.
3. Push ton code :
   ```bash
   git tag -a 1.0.0 -m "Version initiale"
   git push origin 1.0.0
   ```
4. Prépare une **release** sur GitHub, et attache les fichiers nécessaires (`main.js`, `manifest.json`, et éventuellement `styles.css`).

:::warning
Lorsqu'tu effectues une mise à jour sur ton plugin, il ne faut pas oublier :

- De changer le numéro de version dans le fichier `manifest.json`
- Ce numéro de version doit correspondre au nouveau tag
  :::

### Étape 2 : Proposer une demande d'extraction

1. Ouvre une _Pull Request_ dans le dépôt [community-plugins](https://github.com/obsidianmd/obsidian-releases).
2. Ajoute une entrée JSON pour ton plugin :

   ```json
   {
     "id": "mon-premier-plugin",
     "name": "Mon Premier Plugin",
     "author": "Ton Nom",
     "description": "Un plugin simple pour débuter.",
     "repo": "ton-nom-utilisateur/ton-repo"
   }
   ```

3. Sélectionne **Valider les modifications** dans le coin supérieur droit.
4. Clique sur **Proposer des modifications**.
5. Ensuite, sélectionne **Créer une demande d'extraction**.
6. Vérifie ton contenu dans l'onglet **Aperçu**, puis clique sur **Plugin communautaire**.
7. Dans le titre de ta pull request, écris « Ajouter [...] plugin », où `[...]` est le nom de ton plugin.
8. Remplis les détails dans la description de la pull request. Pour les cases à cocher, insère un `x` entre les crochets `[x]` pour marquer les étapes comme terminées.
9. Clique sur **Créer une pull request**.
10. Laisse faire le robot qui va te dire s'il y a des choses à corriger avant la soumission 'humaine'.
11. Une fois que les éventuelles modifications sont faites, un humain va regarder ton code et te demander d'apporter quelques modifications, si besoin.
12. Une fois que tout est bon, ton plugin sera disponibles dans la liste des plugins Obsidian.

#### Effectuer une release

- Sur la page de ton repo, tu vois dans la colonne de droite, une section "**Releases**"
- Clique dessus
- Au bout de quelques instant, ta release apparaît, avec le numéro de ton tag.
- Si tout est bien fait depuis le début, tu dois avoir dans "Assets", les fichiers de ton plugins (`main.js`, `manifest.json`, et éventuellement `styles.css`) et deux dossier zippés.
- Clique sur l'icône du crayon
- Descend sur la page et clique sur le bouton vert "**Update release**"

---
