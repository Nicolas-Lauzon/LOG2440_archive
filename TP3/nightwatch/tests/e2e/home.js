const shared = require("./shared");

describe("Page principale du site", () => {
  before((browser) => {
    browser.url("http://localhost:5000/index.html").waitForElementVisible("body", 1000);
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
      "recipes.html",
      "Le lien sur la page d'accueil doit pointer vers 'recettes.html'."
    );
    shared.validateFooter(browser);
  });
});
