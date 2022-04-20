module.exports = {
  /**
   * Validates the header.
   *
   * @param browser    The browser to use.
   */
  validateHeader: function (browser) {
    const EXPECTED_LINKS = [
      { name: "Accueil", link: "index.html" },
      { name: "Trouver une recette", link: "recettes.html" },
      { name: "Ajouter une recette", link: "ajouter_recette.html" },
      { name: "Contact", link: "contact.html" }
    ];
    browser.log("\n===== Entête =====");
    browser.verify.elementPresent("header", "L'entête existe sur la page.");
    browser.verify.elementPresent(
      "header a",
      "Un lien existe pour le logo du site web."
    );
    browser.verify.attributeContains(
      "header a",
      "href",
      "index.html",
      "Le lien du logo pointe vers la page d'accueil."
    );
    browser.verify.elementPresent(
      "header a > img",
      "Le logo du site web existe dans l'entête."
    );
    browser.verify.attributeContains(
      "header a > img",
      "src",
      "logo.png",
      "Le logo du site web est 'logo.png'."
    );
    browser.verify.elementPresent(
      "header nav",
      "Le menu de navigation existe dans l'entête."
    );
    browser.elements("css selector", "header nav a", function (result) {
      browser.verify.equal(
        result.value.length,
        4,
        "Le menu de navigation doit comporter 4 liens."
      );
      result.value.forEach(function (v, i) {
        browser.elementIdText(v.ELEMENT, function (result) {
          browser.verify.ok(
            result.value
              .toLowerCase()
              .indexOf(EXPECTED_LINKS[i].name.toLowerCase()) !== -1,
            "Le nom de l'élément #" +
              (i + 1) +
              " doit être '" +
              EXPECTED_LINKS[i].name +
              "'."
          );
        });
        browser.elementIdAttribute(v.ELEMENT, "href", function (result) {
          browser.verify.ok(
            result.value.indexOf(EXPECTED_LINKS[i].link) !== -1,
            "Le lien de l'élément #" +
              (i + 1) +
              " doit être '" +
              EXPECTED_LINKS[i].link +
              "'."
          );
        });
      });
    });
    browser.log("\n===== FIN Entête =====");
  },

  /**
   * Validates the footer.
   *
   * @param browser    The browser to use.
   */
  validateFooter: function (browser) {
    browser.log("\n===== Pied de page =====");
    browser.verify.elementPresent("footer", "Le pied de page existe.");
    browser.getText("footer", function (result) {
      browser.verify.ok(result !== "", "Le pied de page contient du texte.");
    });
    browser.log("\n===== FIN Pied de page =====");

  },
};
