const utils = require("./utils");
const shared = require("./shared");

describe("Page de la liste des recettes", () => {
  before((browser) => {
    browser.url(utils.getUrl("recettes.html"));
  });

  after((browser) => {
    browser.end();
  });

  test("Comportement par défault de la page de la liste de recettes", (browser) => {
    const EXPECTED_CATEGORIES = [
      "Toutes les recettes",
      "Recettes végétariennes",
      "Recettes méditerranéennes",
      "Recettes ketos"
    ];

    browser.log("\n===== Contenu principal =====");
    shared.validateHeader(browser);
    browser.verify.elementPresent(
      "header + main",
      "L'élément 'main' est présent sur la page."
    );
    browser.verify.elementPresent(
      ".recettes-type",
      "L'élément avec la classe '.recettes-type' existe sur la page."
    ); 
    browser.elements(
      "css selector",
      ".recettes-type button",
      function (result) {
        browser.verify.equal(
          result.value.length,
          4,
          "Le groupe de bouton '.recettes-type' doit comporter 4 boutons."
        );
        result.value.forEach(function (v, i) {
          browser.elementIdText(v.ELEMENT, function (result) {
            browser.verify.ok(
              result.value
                .toLowerCase()
                .indexOf(EXPECTED_CATEGORIES[i].toLowerCase()) !== -1,
              "Le nom du bouton #" +
                (i + 1) +
                " doit être '" +
                EXPECTED_CATEGORIES[i] +
                "'."
            );
          });
        });
      }
    );

    browser.verify.elementPresent(
      "#recettes-list",
      "L'élément avec id #recettes-list existe sur la page"
    );
    browser.elements("css selector", "#recettes-list a", function (result) {
      browser.verify.equal(
        result.value.length,
        6,
        "La liste doit comporter 6 recettes."
      );
      result.value.forEach(function (v, i) {
        browser.elementIdAttribute(v.ELEMENT, "href", function (result) {
          browser.verify.ok(
            result.value.indexOf("recette.html") !== -1,
            "Le lien de la recette #" + (i + 1) + " pointe vers 'recette.html'."
          );
        });
        browser.elementIdElement(
          v.ELEMENT,
          "css selector",
          "h1",
          function (result1) {
            browser.elementIdElement(
              v.ELEMENT,
              "css selector",
              "h2",
              function (result2) {
                browser.elementIdElement(
                  v.ELEMENT,
                  "css selector",
                  "h3",
                  function (result3) {
                    browser.verify.ok(
                      result1.status !== -1 ||
                        result2.status !== -1 ||
                        result3.status !== -1,
                      "Un titre est présent pour la recette #" + (i + 1) + "."
                    );
                  }
                );
              }
            );
          }
        );
        browser.elementIdElement(
          v.ELEMENT,
          "css selector",
          "img",
          function (result) {
            browser.verify.ok(
              result.status !== -1,
              "Une image est présente pour la recette #" + (i + 1) + "."
            );
          }
        );
      });
    });

    shared.validateFooter(browser);
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
