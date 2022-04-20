const utils = require("./utils");
const shared = require("./shared");

describe("Page d'une recette spécifique", () => {
  before((browser) => {
    browser.url(utils.getUrl("recette.html"));
  });

  after((browser) => {
    browser.end();
  });

  test("Comportement par défault de la page de recette spécifique", (browser) => {
    shared.validateHeader(browser);

    browser.log("\n===== Contenu principal =====");
    browser.verify.elementPresent(
      "header + main",
      "L'élément 'main' est présent sur la page."
    );
    browser.verify.elementPresent(
      "main h1",
      "Un titre est présent sur la page de la recette"
    );
    browser.verify.elementPresent(
      "main h2",
      "Un sous-titre est présent sur la page de la recette"
    );
    browser.verify.elementPresent(
      "main img",
      "Une image est présente sur la page de la recette"
    );
    browser.verify.elementPresent(
      "main ul",
      "Une liste non ordonnée est présent sur la page de la recette"
    );
    browser.verify.elementPresent(
      "main button",
      "Un bouton pour imprimer la recette est présent sur la page de la recette"
    );
    browser.verify.elementPresent(
      "main input[type='checkbox']",
      "Un checkbox doit être présent pour la liste d'ingrédiants"
    );
    browser.elements("css selector", "#list-ingredients input[type='checkbox']", function (result) {
      browser.verify.equal(
        result.value.length,
        9,
        "La recette doit comporter 9 checkbox d'ingrédiants."
      );
    });
    browser.elements("css selector", "#list-outils input[type='checkbox']", function (result) {
      browser.verify.equal(
        result.value.length,
        4,
        "La recette doit comporter 4 checkbox d'outils de cuisson."
      );
    });
    browser.elements("css selector", ".recette-container div", function (result) {
      browser.verify.equal(
        result.value.length,
        6,
        "La recette doit comporter 6 étapes."
      );
      result.value.forEach(function (v, i) {
        browser.elementIdElement(
          v.ELEMENT,
          "css selector",
          "img",
          function (result) {
            browser.verify.ok(
              result.status !== -1,
              "Une image est présente pour l'étape #" + (i + 1) + "."
            );
          }
        );
        browser.elementIdElement(
          v.ELEMENT,
          "css selector",
          "p",
          function (result) {
            browser.verify.ok(
              result.status !== -1,
              "Une description est présente pour l'étape #" + (i + 1) + "."
            );
          }
        );
      });
    });

    shared.validateFooter(browser);
  });

  test("Modification de l'affichage en bas de 900px", (browser) => {
    browser.resizeWindow(1000, 1000);
    browser.getCssProperty(".recette-container", "grid-template-columns", function (result) {
      browser.verify.equal(
        result.value.split(" ").length, 
        2, 
        "Il y a 2 colonnes pour la liste des recettes"
      );
    });
    browser.resizeWindow(700, 700);
    browser.getCssProperty(".recette-container", "grid-template-columns", function (result) {
      browser.verify.equal(
        result.value.split(" ").length, 
        1, 
        "Il y a 1 colonne pour la liste des recettes en bas de 900px"
      );
    });
  });

  test("HTML respecte les normes de W3C", (browser) => {
    browser.validateHTML(function (err) {
      if (err && err.length !== 0) {
        console.error(err);
      }
      browser.verify.ok(
        !err || err.length === 0,
        "La page ne contient aucune erreur HTML."
      );
    });
  });

});
