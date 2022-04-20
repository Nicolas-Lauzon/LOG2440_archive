# LOG2440_archive
archive des tps de LOG2440
# TP1

Le but de ce travail pratique est de vous familiariser avec **HTML** et **CSS**.P lus particulièrement, vous allez élaborer la structure de pages web tout en respectant la structure sémantique apportée par HTML5. De plus, vous allez mettre en place l’interaction entre les différentes pages à l’aide des hyperliens. Finalement, vous aurez à reproduire les maquettes des différentes pages du site web qui vous sont fournies en annexe de l'énoncé du travail. Vous pourrez aussi vous familiariser avec l’exécution de test de bout en bout avec la librairie Nightwatch.

## Installation des librairies nécessaires

Pour pouvoir les librairies nécessaires pour le TP, vous aurez besoin de l'environnement d'exécution NodeJS et le gestionnaire de paquet npm. Vous pouvez les installer sur votre machine à partir du [lien suivant](https://nodejs.org/en/download/). On vous recommande d'installer la version *LTS*.

Pour installer les dépendances nécessaires, lancez la commande `npm install` dans la racine du projet. Ceci installera toutes les librairies définies dans le fichier `package.json`. Vous pouvez par la suite utiliser les libraires de test et les scripts définis dans le même fichier.
## Nightwatch sur Windows, Linux et macOS.

Pour faire fonctionner les tests Nightwatch sur Linux, vous devez simplement changer le "server_path" du "webdriver" à la ligne 11 du fichier nightwatch.json. Normalement, le path du hromedriver sur Linux devrait être: `node_modules/.bin/chromedriver`. Pour MacOs, il faut changer le même path pour: `node_modules/chromedriver/lib/chromedriver/chromedriver`. Pour le Windows, le path est `node_modules/chromedriver/lib/chromedriver/chromedriver.exe`.

La version du module `chromedriver` doit correspondre à la version de Chrome de votre machine. Par défaut, la version est **97**. Vous devez mettre à jour votre version de Chrome si elle n'est pas à jour avec **97** ou modifier la version dans `package.json` et relancer `npm install` si votre version de Chrome est supérieure à **97**.

## Exécution des tests

Vous pouvez exécuter les tests automatisés avec la commande `npm run e2e`. Ceci exécutera les tests et produire un rapport dans votre terminal.

**Note** : par défaut, seulement les tests définis dans `contact.js` pour la page `contact.html` ainsi que les tests partagés pour l'entête et le bas de page seront exécutés. Si vous voulez exécuter des tests pour d'autres pages, vous pouvez modifier le nom du fichier ciblé par la propriété `filter` dans le fichier de configuration `nightwatch.json`. **Important** : vous devez enlever complètement le filtre pour la remise afin de pouvoir exécuter l'ensemble des tests automatisés fournis.

**Note** : initialement, les tests pour l'entête et le bas de page vont échouer puisque leur code HTML n'est pas fourni. On vous recommande **fortement** de commencer par compléter cette partie du TP en premier en utilisant les tests comme guide. Lisez bien le code dans `shared.js` pour mieux comprendre le résultat attendu.

## Déploiement local

Vous pouvez faire un déploiement local de votre site avec l'outil `lite-server`. Si vous lancez la commande `npm start` dans la racine du projet, un serveur HTTP statique sera déployé sur votre machine et votre site sera accessible sur l'addresse `localhost:5000` ou `<votre-adresse-IP>:5000`. La sortie dans le terminal vous donnera l'adresse exacte d'accès.

# Correction

| **Exigences**                                     | **Note** | **Points** |
| ------------------------------------------------- | :------: | :--------: |
| Respect des exigences fonctionnelles de l’énoncé  |    0     |     6      |
| Validation des données entrées                    |    0     |     1      |
| Utilisation adéquate des éléments d’un formulaire |    0     |     1      |
| Utilisation adéquate des balises sémantiques      |    9     |     1      |
| Validité de la sémantique de la page              |    0     |     1      |
| Entête et Pied de page                            |    0     |     1      |
| Page d’accueil                                    |    0     |     1      |
| Page des recettes                                 |    0     |     2      |
| Page d’une recette                                |    0     |     2      |
| Page d’ajout de recette                           |    0     |     2      |
| Qualité et clarté du code HTML et CSS             |    0     |     2      |
| **Total**                                         | **0**    |   **20**   |
