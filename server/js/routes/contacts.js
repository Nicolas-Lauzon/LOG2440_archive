const { ContactJsonManager } = require("../managers/contacts_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const jsonManager = new ContactJsonManager();

/**
 * @todo Renvoyer le contenu json de tous les contacts
 */
router.get("/", async (request, response) => {
  try {
    const allContacts = await jsonManager.getAllContacts();
    response.status(HTTP_STATUS.SUCCESS);
    response.json(allContacts);
  } catch (error) {
    response.status(HTTP_STATUS.NO_CONTENT).end();
  }
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
    await jsonManager.addNewContact(request.body);
    response.status(HTTP_STATUS.SUCCESS);

  } catch (error) {
    response.status(HTTP_STATUS.NO_CONTENT).end();
  }
});

/**
 * @todo Supprimer un contact spécifique selon un id
 */
router.delete("/:id", async (request, response) => {
  try {
    const success = await jsonManager.deleteContactByID(request.params.id);
    response.status(HTTP_STATUS.SUCCESS);
    response.json(success);
  } catch (error) {
    response.status(501).end();
  }
});

module.exports = { router, jsonManager };
