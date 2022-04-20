const utils = require("./utils");
const shared = require("./shared");

describe("Page de contact", () => {
  before((browser) => {
    browser.url(utils.getUrl("contact.html"));
  });

  after((browser) => {
    browser.end();
  });
  test("Comportement par défault de la de contact", (browser) => {
    browser.log("\n===== Contenu principal =====");
    shared.validateHeader(browser);
    browser.verify.elementPresent(
      "header + main",
      "L'élément 'main' est présent sur la page."
    );
    browser.verify.elementPresent(
      "main h1",
      "Un titre est présent sur la page de contact"
    );
    browser.verify.elementPresent(
      "main p",
      "Un paragraphe est présent sur la page de contact."
    );
    browser.verify.elementPresent(
        "main section",
        "Une section est présente sur la page de contact"
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
