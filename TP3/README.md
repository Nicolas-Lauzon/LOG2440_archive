# TP3

Le but de ce travail pratique est de vous familiariser avec les **tests unitaires** et la validation et vérification de code JS. Plus particulièrement, vous allez écrire les tests unitaires pour une version modifiée du TP2 ainsi que quelques nouvelles fonctionnalités ajoutées pour ce travail.

## Séparation des projets

Notez que dans ce travail, le code source du site web ainsi que ses tests unitaires sont séparés du projet de tests Nightwatch. Le répertoire `siteWeb` contient tous les fichiers du site Web ainsi que les tests Jest dans le répertoire `test/jest`. Comme les tests `e2e` avec Nightwatch effectuent une validation d'un site Web déployé, ce projet est isolé dans son propre répertoire `nightwatch`. Chaque répertoire contient son propre fichier `package.json` avec ses propres dépendances.

## Installation des librairies nécessaires

Pour pouvoir les librairies nécessaires pour le TP, vous aurez besoin de l'environnement d'exécution NodeJS et le gestionnaire de paquet npm. Vous pouvez les installer sur votre machine à partir du [lien suivant](https://nodejs.org/en/download/). On vous recommande d'installer la version *LTS*.

Pour installer les dépendances nécessaires, lancez la commande `npm install` dans la racine de chaque projet. Ceci installera toutes les librairies définies dans le fichier `package.json`. Vous pouvez par la suite utiliser les libraires de test et les scripts définis dans le même fichier.

## Nightwatch sur Windows, Linux et macOS.

Pour faire fonctionner les tests Nightwatch sur Linux, vous devez simplement changer le "server_path" du "webdriver" à la ligne 11 du fichier nightwatch.json. Normalement, le path du chromedriver sur Linux devrait être: `node_modules/.bin/chromedriver`. Pour MacOs, il faut changer le même path pour: `node_modules/chromedriver/lib/chromedriver/chromedriver`. Pour le Windows, le path est `node_modules/chromedriver/lib/chromedriver/chromedriver.exe`.

## Exécution des tests

Vous pouvez exécuter les tests automatisés avec la commande `npm run e2e` dans la racine du projet `nightwatch`. Ceci exécutera les tests et produira un rapport dans votre terminal.

**Note** : comme le travail utilise les modules ES (**ESM**), les tests automatisés doivent être exécutés sur des pages Web servies par un serveur HTTP. Vous devez avoir un serveur déployé avant de pouvoir exécuter vos tests. Lancez votre déploiement local dans un autre terminal avant d'exécuter vos tests.

Vous pouvez exécuter les tests unitaires automatisés avec la commande `npm test`. Ceci exécutera les tests et produira un rapport dans votre terminal.

Vous pouvez calculer la couverture du code avec la commande `npm run coverage`. Ceci produire un rapport dans votre terminal ainsi que dans le répertoire `coverage`.

## Déploiement local

Vous pouvez faire un déploiement local de votre site avec l'outil `lite-server`. Si vous lancez la commande `npm start` dans la racine du projet, un serveur HTTP statique sera déployé sur votre machine et votre site sera accessible sur l'addresse `localhost:5000` ou `<votre-adresse-IP>:5000`. La sortie dans le terminal vous donnera l'adresse exacte d'accès.

# Correction

| **Exigences**                                     | **Note** | **Points** |
| ------------------------------------------------- | :------: | :--------: |
| Respect des exigences fonctionnelles de l’énoncé  |    0     |     2      |
| Tests pour _recipes\_displayer.js_                |    0     |     2      |
| Code dans _recipe\_displayer.js_                  |    0     |     2      |
| Code dans _add\_recipe.js_                        |    0     |     2      |
| Code dans _form.js_                               |    0     |     2      |
| Code dans _recipe.js_                             |    0     |     1      |
| Code dans _recipes.js_                            |    0     |     2      |
| Code dans _recipe\_manager.js_                    |    0     |     2      |
| Code dans _storage\_manager.js_                   |    0     |     2      |
| Structure du code                                 |    0     |     1      |
| Qualité et clarté du code                         |    0     |     2      |
| **Total**                                         | **0**    |   **20**   |