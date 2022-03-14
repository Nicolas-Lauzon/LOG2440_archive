const { ContactJsonManager } = require("../managers/contacts_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const jsonManager = new ContactJsonManager();

/**
 * @todo Renvoyer le contenu json de tous les contacts
 */
router.use("/", async (request, response) => {
  // TODO
  response.status(501).end();
});

/**
 * @todo Ajouter un nouveau contact
 */
router.post("/", async (request, response) => {
  try {
    if (!Object.keys(request.body).length) {
      response.status(HTTP_STATUS.BAD_REQUEST).send();
      return;
    }
    // TODO
    response.status(501).end();
  } catch (error) {
    // TODO
  }
});

/**
 * @todo Supprimer un contact spécifique selon un id
 */
router.delete("/:id", async (request, response) => {
  // TODO
  response.status(501).end();
});

module.exports = { router, jsonManager };
