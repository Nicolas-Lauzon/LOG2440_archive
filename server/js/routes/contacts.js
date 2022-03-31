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
    response.status(500).end();
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
    response.status(302).redirect('http://localhost:5000/contact');
  } catch (error) {
    response.status(500).end();
  }
});

/**
 * @todo Supprimer un contact spécifique selon un id
 */
router.delete("/:id", async (request, response) => {
  try {
    const success = await jsonManager.deleteContactByID(request.params.id);
    if(!success){
      response.status(404).end();
    }
    response.status(204);
    response.json(success);
  } catch (error) {
    response.status(500).end();
  }
});

module.exports = { router, jsonManager };
