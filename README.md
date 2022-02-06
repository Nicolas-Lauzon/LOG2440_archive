# TP2

Le but de ce travail pratique est de vous familiariser avec **JS** et la manipulation du **DOM**. Plus particulièrement, vous allez rendre le site web dévelopé au TP1 dynamique. La liste des recettes ainsi que la page d'information d'une recette spécifique seront maintenant construites à travers du code JS. Chaque page de recette sera remplie avec les informations spécifiques de la recette choisie. Vous pourrez aussi continuer à vous familiariser avec l’exécution de test de bout en bout avec la librairie Nightwatch.

## Installation des librairies nécessaires

Pour pouvoir les librairies nécessaires pour le TP, vous aurez besoin de l'environnement d'exécution NodeJS et le gestionnaire de paquet npm. Vous pouvez les installer sur votre machine à partir du [lien suivant](https://nodejs.org/en/download/). On vous recommande d'installer la version *LTS*.

Pour installer les dépendances nécessaires, lancez la commande `npm ci` dans la racine du projet. Ceci installera toutes les librairies définies dans le fichier `package.json`. Vous pouvez par la suite utiliser les libraires de test et les scripts définis dans le même fichier.
## Nightwatch sur Windows, Linux et macOS.

Pour faire fonctionner les tests Nightwatch sur Linux, vous devez simplement changer le "server_path" du "webdriver" à la ligne 11 du fichier nightwatch.json. Normalement, le path du chromedriver sur Linux devrait être: `node_modules/.bin/chromedriver`. Pour MacOs, il faut changer le même path pour: `node_modules/chromedriver/lib/chromedriver/chromedriver`. Pour le Windows, le path est `node_modules/chromedriver/lib/chromedriver/chromedriver.exe`.

## Exécution des tests

Vous pouvez exécuter les tests automatisés avec la commande `npm run e2e`. Ceci exécutera les tests et produire un rapport dans votre terminal.

**Note** : comme le travail utilise les modules ES (**ESM**), les tests automatisés doivent être exécutés sur des pages Web servies par un serveur HTTP. Vous devez avoir un serveur déployé avant de pouvoir exécuter vos tests. Lancez votre déploiement local dans un autre terminal avant d'exécuter vos tests.

## Déploiement local

Vous pouvez faire un déploiement local de votre site avec l'outil `lite-server`. Si vous lancez la commande `npm start` dans la racine du projet, un serveur HTTP statique sera déployé sur votre machine et votre site sera accessible sur l'addresse `localhost:5000` ou `<votre-adresse-IP>:5000`. La sortie dans le terminal vous donnera l'adresse exacte d'accès.

## Liste des recettes

Une liste complète des recettes initiaux est disponible dans `data/recipes.js`. 

# Correction

| **Exigences**                                     | **Note** | **Points** |
| ------------------------------------------------- | :------: | :--------: |
| Respect des exigences fonctionnelles de l’énoncé  |    0     |     2      |
| Code dans _recipe\_manager.js_                    |    0     |     2      |
| Code dans _storage\_manager.js_                   |    0     |     2      |
| Code dans _recipes.js_                            |    0     |     3      |
| Code dans _recipe.js_                             |    0     |     3      |
| Code dans add\_recipe.js_                         |    0     |     4      |
| Structure du code                                 |    0     |     2      |
| Qualité et clarté du code                         |    0     |     2      |
| **Total**                                         | **0**    |   **20**   |