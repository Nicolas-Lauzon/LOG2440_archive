const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class ContactJsonManager {
  constructor () {
    this.JSON_PATH = path.join(__dirname + "../../../data/contacts.json");
  }

  /**
   * Lire le fichier JSON des contacts et retourner les contacts
   * @returns retourner les contacts du fichier JSON
   */
  async getAllContacts () {
    const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
    const contactsContainer = JSON.parse(fileBuffer);
    return contactsContainer.contacts;
  }

  /**
   * Ajouter un nouveau contact dans la liste des contacts en écrivant dans le fichier JSON
   * @todo ajouter un nouveau contact avec id = nombre de contacts + 1 et mettre à jour le fichier JSON
   * @param {*} newContact : le nouveau contact à ajouter
   */
  async addNewContact (newContact) {
    let allContacts = await this.getAllContacts();
    let contact = {};
    contact.id = allContacts.length + 1;
    contact.name = newContact.name;
    contact.email = newContact.email;
    contact.message = newContact.message;
    allContacts.push(contact);
    let finalList = {"contacts" : allContacts}
    const ret = await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(finalList));
  }

  /**
   * Supprimer le contact de la liste et mettre à jour le fichier JSON
   * @todo supprimer le contact de la liste et mettre à jour le fichier JSON
   * @param {string} id : contact ayant cet id
   * @returns true si la suppression a réussi, false sinon
   */
  async deleteContactByID (id) {

    const contacts = await this.getAllContacts();
    let finalList = contacts.filter((contact) => String(contact.id) !== id);
    if( finalList.length == contacts.length) {
      return false;
    }
    finalList = { "contacts": finalList };
    const ret = await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(finalList));
    return true;
  }
}

module.exports = { ContactJsonManager };
