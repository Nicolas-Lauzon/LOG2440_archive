const shared = require("./shared");

describe("Page de contact", () => {
  before((browser) => {
    browser.url("http://localhost:5000/contact.html").waitForElementVisible("body", 1000);
  });

  after((browser) => {
    browser.end();
  });
  test("Comportement par défault de la de contact", (browser) => {
    browser.log("\n===== Contenu principal =====");
    shared.validateHeader(browser);
    browser.verify.elementPresent("header + main", "L'élément 'main' est présent sur la page.");
    browser.verify.elementPresent("main h1", "Un titre est présent sur la page de contact");
    browser.verify.elementPresent("main p", "Un paragraphe est présent sur la page de contact.");
    browser.verify.elementPresent("main section", "Une section est présente sur la page de contact");
    shared.validateFooter(browser);
  });
});
