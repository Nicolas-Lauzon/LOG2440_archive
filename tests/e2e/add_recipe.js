const shared = require("./shared");

describe("Page d'ajout de recette", () => {
  before((browser) => {
    browser.url("http://localhost:5000/add_recipe.html").waitForElementVisible("body", 1000);
  });

  after((browser) => {
    browser.end();
  });

  test("Comportement par défault de la page Add_recipe", (browser) => {
    const EXPECTED_LABELS = [
      "Nom de la recette:",
      "Sélectionner le type de recette:",
      "Temps de préparation (min):",
      "Ajouter la liste d'ingrédients nécessaire (séparer les éléments (ingrédients:quantités) par une virgule):",
      "Ajouter la liste des outils de cuisson nécessaire (séparer les éléments par une virgule):",
      "Ajouter une image pour votre recette:",
      "Nom de l'étape:",
      "Description de l'étape:",
      "Ajouter une image pour cette étape:"
    ];

    browser.log("\n===== Contenu principal =====");
    shared.validateHeader(browser);
    browser.verify.elementPresent("header + main", "L'élément 'main' est présent sur la page.");
    browser.verify.elementPresent("h1", "Un titre existe sur la page.");
    browser.verify.elementPresent("form", "Une form existe sur la page.");
    browser.elements("css selector", "form label", function (result) {
      browser.verify.equal(result.value.length, 9, "La form doit comporter 9 labels.");
      result.value.forEach(function (v, i) {
        browser.elementIdText(v.ELEMENT, function (result) {
          browser.verify.ok(
            result.value.toLowerCase()
              .indexOf(EXPECTED_LABELS[i].toLowerCase()) !== -1,
            "Le nom du label #" + (i + 1) + " doit être '" + EXPECTED_LABELS[i] + "'."
          );
        });
      });
    });
    browser.verify.elementPresent("form input[type='text']", "Un input text existe sur la page.");
    browser.elements("css selector", "form input[type='text']", function (result) {
      browser.verify.equal(result.value.length, 6, "La form doit comporter 6 input text.");
    });
    browser.verify.elementPresent("form input[type='file']", "Un input file existe sur la page.");
    browser.elements("css selector", "form input[type='file']", function (result) {
      browser.verify.equal(result.value.length, 2, "La form doit comporter 2 input file.");
    });
    browser.verify.elementPresent("form select option", "Un select avec des options existe sur la page.");
    browser.elements("css selector", "form select option", function (result) {
      browser.verify.equal(result.value.length, 5, "Le select doit comporter 5 options.");
    });

    shared.validateFooter(browser);
  });

  test("Le bouton Ajouter une étape modifie l'HTML", (browser) => {
    browser.click("#add-step");
    browser.elements("css selector", "form input[type='file']", function (result) {
      browser.verify.equal(result.value.length, 3, "La form doit comporter 3 input file.");
    });
    browser.elements("css selector", "form input[type='text']", function (result) {
      browser.verify.equal(result.value.length, 8, "La form doit comporter 8 input text.");
    });
  });

  test("Le bouton Réinitialiser la liste vide LocalStorage et redirige vers recipes.html", (browser) => {
    browser.click("#reset");
    browser.execute(
      () => localStorage.length,
      [],
      (res) => {
        browser.assert.equal(res.value, 1, "LocalStorage devrait avoir une taille de 1 seulement");
      }
    );
    browser.assert.urlEquals("http://localhost:5000/recipes.html");
  });

  test("Respecte les normes de W3C", (browser) => {
    browser.validateHTML(function (err) {
      if (err && err.length !== 0) {
        console.error(err);
      }
      browser.verify.ok(!err || err.length === 0, "La page ne contient aucune erreur HTML.");
    });
  });
});
