const utils = require("./utils");
const shared = require("./shared");

describe("Page principale du site", () => {
  before((browser) => {
    browser.url(utils.getUrl("index.html"));
  });

  after((browser) => {
    browser.end();
  });
  test("Comportement par défault de la page principale", (browser) => {
    browser.log("\n===== Contenu principal =====");
    shared.validateHeader(browser);
    browser.verify.elementPresent(
      "header + main",
      "L'élément 'main' est présent sur la page."
    );
    browser.verify.elementPresent(
      "main h1",
      "Un titre est présent sur la page d'accueil"
    );
    browser.verify.elementPresent(
      "main p",
      "Un paragraphe est présent sur la page d'accueil."
    );
    browser.verify.elementPresent(
      "main img",
      "Une image est présente sur la page d'accueil."
    );
    browser.verify.attributeContains(
      "main img",
      "src",
      "home.jpg",
      "L'image sur la page d'accueil doit être 'home.jpg'."
    );
    browser.verify.elementPresent(
      "main a",
      "Un lien est présent sur la page d'accueil."
    );
    browser.verify.attributeContains(
      "main a",
      "href",
      "recettes.html",
      "Le lien sur la page d'accueil doit pointer vers 'recettes.html'."
    );
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
