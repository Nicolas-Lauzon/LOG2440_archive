const shared = require("./shared");
const recipes = require("../data/recipes.json").recipes;

describe("Page d'une recette de base", () => {
  before((browser) => {
    browser.url("http://localhost:5000/recipe.html?id=4").waitForElementVisible("body", 1000);
  });

  after((browser) => {
    browser.end();
  });

  test("Comportement par défault de la page de recette spécifique", (browser) => {
    shared.validateHeader(browser);

    browser.log("\n===== Contenu principal =====");
    browser.verify.elementPresent("header + main", "L'élément 'main' est présent sur la page.");
    browser.verify.elementPresent("main h1", "Un titre est présent sur la page de la recette");
    browser.verify.elementPresent("main h2", "Un sous-titre est présent sur la page de la recette");
    browser.verify.elementPresent("main img", "Une image est présente sur la page de la recette");
    browser.verify.elementPresent("main ul", "Une liste non ordonnée est présent sur la page de la recette");
    browser.verify.elementPresent("main button", "Un bouton pour imprimer la recette est présent sur la page de la recette");
    browser.verify.elementPresent("main input[type='checkbox']", "Un checkbox doit être présent pour la liste d'ingrédients");
    shared.validateFooter(browser);
  });

  test("Modification de l'affichage en bas de 900px", (browser) => {
    browser.resizeWindow(1000, 1000);
    browser.getCssProperty(".recipe-container", "grid-template-columns", function (result) {
      browser.verify.equal(result.value.split(" ").length, 2, "Il y a 2 colonnes pour la liste des recettes");
    });
    browser.resizeWindow(800, 800);
    browser.getCssProperty(".recipe-container", "grid-template-columns", function (result) {
      browser.verify.equal(result.value.split(" ").length, 1, "Il y a 1 colonne pour la liste des recettes en bas de 900px");
    });
  });

  test("HTML respecte les normes de W3C", (browser) => {
    browser.validateHTML(function (err) {
      if (err && err.length !== 0) {
        console.error(err);
      }
      browser.verify.ok(!err || err.length === 0, "La page ne contient aucune erreur HTML.");
    });
  });
});

/**
 * Validation des propriétés d'une recette
 * @param {*} browser instance de Chromedriver pour les tests
 * @param {*} recipe recette à valider
 */
function validateRecipeInformation (browser, recipe) {
  browser.getText(".recipe-header", function (result) {
    browser.verify.ok(result.value === recipe.name, "La page contient le bon nom de recette");
  });
}

/**
 * Validation des ingrédients d'une recette
 * @param {*} browser instance de Chromedriver pour les tests
 * @param {*} recipe recette à valider
 */
function validateIngredients (browser, recipe) {
  browser.elements("css selector", "#list-ingredients input[type='checkbox']", function (result) {
    browser.verify.equal(
      result.value.length,
      recipe.ingredients.length,
      `La recette doit comporter ${recipe.ingredients.length} checkbox d'ingrédients.`
    );
  });
}

/**
 * Validation des outils nécessaires d'une recette
 * @param {*} browser instance de Chromedriver pour les tests
 * @param {*} recipe recette à valider
 */
function validateTools (browser, recipe) {
  browser.elements("css selector", "#tools-list input[type='checkbox']", function (result) {
    browser.verify.equal(
      result.value.length,
      recipe.tools.length,
      `La recette doit comporter ${recipe.tools.length} checkbox d'outils de cuisson.`
    );
  });
}

/**
 * Validation des étapes d'une recette
 * @param {*} browser instance de Chromedriver pour les tests
 * @param {*} recipe recette à valider
 */
function validateSteps (browser, recipe) {
  browser.elements("css selector", ".recipe-container div", function (result) {
    browser.verify.equal(result.value.length, recipe.steps.length, `La recette doit comporter ${recipe.steps.length} étapes.`);
    result.value.forEach(function (v, i) {
      browser.elementIdElement(v.ELEMENT, "css selector", "img", function (result) {
        browser.verify.ok(result.status !== -1, "Une image est présente pour l'étape #" + (i + 1) + ".");
      });
      browser.elementIdElement(v.ELEMENT, "css selector", "p", function (result) {
        browser.verify.ok(result.status !== -1, "Une description est présente pour l'étape #" + (i + 1) + ".");
      });
    });
  });
}

/**
 * Validation des éléments générés automatiquements par le JS
 * @param {*} browser instance de Chromedriver pour les tests
 * @param {*} recipe recette à valider
 */
function validatePage(browser, index, recipe) {
  browser.url(`http://localhost:5000/recipe.html?id=${index}`).waitForElementVisible("body", 1000);
  validateRecipeInformation(browser, recipe);
  validateIngredients(browser, recipe);
  validateTools(browser, recipe);
  validateSteps(browser, recipe);
  browser.end();
}

// La nature asynchrone de Mocha et Chromedriver ne permet pas de boucles
describe("Validation des recettes de base", () => {
  it("validation de la recette #0", (browser) => {
    validatePage(browser, 1, recipes[0]);
  });
  it("validation de la recette #1", (browser) => {
    validatePage(browser, 2, recipes[1]);
  });
  it("validation de la recette #2", (browser) => {
    validatePage(browser, 3, recipes[2]);
  });
  it("validation de la recette #3", (browser) => {
    validatePage(browser, 4, recipes[3]);
  });
  it("validation de la recette #4", (browser) => {
    validatePage(browser, 5, recipes[4]);
  });
});
