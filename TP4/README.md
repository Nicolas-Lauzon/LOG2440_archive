# TP4

Le but de ce travail pratique est de vous familiariser avec le serveur web et la communication HTTP entre un site web (client) et un serveur. Plus particulièrement, vous allez compléter le serveur web utilisant NodeJS et la librairie Express qui permet de gérer les recettes de votre application. Vous allez également mettre en place une communication HTTP entre le site web et le serveur pour la gestion des recettes. Dans ce travail pratique, vous aurez 2 nouvelles fonctionnalités : la possibilité d'envoyer des commentaires à travers un formulaire de la page `contact` et le mode admin : une vue spéciale qui permet de supprimer des recettes et des commentaires qui sont enregistrés sur le serveur.

## Séparation du projet

Notez que dans ce travail, le contenu statique du site web (HTML,CSS et JS) est sauvegardé dans le répertoire `public` du serveur. Votre serveur NodeJS va donc jouer le rôle de serveur statique ET serveur dynamique en même temps.

Le code source du serveur est disponible dans le répertoire `js` ainsi que le fichier `server.js` qui est le point d'entrée du logiciel. Le répertoire `routes` contient les 2 _Router_ d'Express pour les fonctionnalités du serveur. Le répertoire `managers` contient les scripts qui gèrent la logique de la gestion des données sur le serveur.

L'information (recettes et contacts) est sauvegardée sur la machine du serveur dans les 2 fichiers JSON du répertoire `data`. Le fichier `default.json` contient les 5 recettes par défaut et permet de réinitialiser l'état par défaut du serveur.

## Installation des librairies nécessaires

Pour pouvoir les librairies nécessaires pour le TP, vous aurez besoin de l'environnement d'exécution NodeJS et le gestionnaire de paquet npm. Vous pouvez les installer sur votre machine à partir du [lien suivant](https://nodejs.org/en/download/). On vous recommande d'installer la version _LTS_.

Pour installer les dépendances nécessaires, lancez la commande `npm install` dans la racine de chaque projet. Ceci installera toutes les librairies définies dans le fichier `package.json`. Vous pouvez par la suite utiliser les libraires de test et les scripts définis dans le même fichier.


## Exécution des tests

Le code source du serveur est accompagné d'une série de tests qui permettent de vérifier le comportement des requêtes HTTP ainsi que le comportement des _managers_ internes du serveur. Le code source des tests est disponible dans le répertoire `tests`. Les fichiers `contacts.test.js` et `recipes.test.js` permettent de vérifier les bons codes de retour HTTP pour chaque route de votre serveur à l'aide de la librairie `supertest`.

Vous êtes fortement encouragés de consulter les tests fournis. Ils vous aideront à mieux comprendre le travail à faire et le bon comportement du serveur.

Vous pouvez exécuter les tests unitaires automatisés avec la commande `npm test`. Ceci exécutera les tests et produira un rapport dans votre terminal.

Vous pouvez calculer la couverture du code avec la commande `npm run coverage`. Ceci produire un rapport dans votre terminal ainsi que dans le répertoire `coverage`.

## Déploiement local

Vous pouvez faire un déploiement local de votre serveur avec la commande `npm start` dans la racine du répertoire `server`. Le serveur sera déployé sur votre machine et votre site sera accessible sur l'adresse `localhost:5000` ou `<votre-adresse IP>:5000`.

L'accès à une route qui n'est pas valide doit retourner la page `error.html` disponible dans `public/pages/`. 


# Correction

| **Exigences**                                     | **Note** | **Points** |
| ------------------------------------------------- | :------: | :--------: |
| Implémentation de la route dans _server.js_       |    0     |     1      |
| Implémentation du _Routeur_ _recipes.js_          |    0     |     3      |
| Implémentation du _Routeur_ _contacts.js_         |    0     |     2      |
| Implémentation de _RecipeJsonManager_             |    0     |     3      |
| Implémentation de _ContactJsonManager_            |    0     |     2      |
| Implémentation de _HTTPManager_ et _AdminManager_ |    0     |     5      |
| Structure du code                                 |    0     |     2      |
| Qualité et clarté du code                         |    0     |     2      |
| **Total**                                         | **0**    |   **20**   |