const { dbService } = require('./database.service');
const defaultContacts = require('../data/defaultContacts.json');

const CONTACTS_COLLECTION = 'contacts';

class ContactsService {
  constructor () {
    this.dbService = dbService;
  }

  /**
   * @returns la collection de contacts de la BD
   */
  get collection () {
    return this.dbService.db.collection(CONTACTS_COLLECTION);
  }

  /**
   * TODO : Récupérer tous les contacts de la collection
   * @returns les contacts de la collection
   */
  async getAllContacts () {
    return await this.dbService.db.collection(CONTACTS_COLLECTION).find({}).toArray();
  }

  /**
   * TODO : Ajouter un nouveau contact dans la liste des contacts en écrivant dans la collection
   * @param {*} newContact : le nouveau contact à ajouter
   */
  async addNewContact (contact) {
    const maxId = await this.dbService.db.collection(CONTACTS_COLLECTION).find().sort({ id: -1 }).limit(1).toArray();
    const idNewContact = maxId[0].id + 1;
    contact.id = idNewContact
    await this.dbService.db.collection(CONTACTS_COLLECTION).insertOne(contact);
  }

  /**
   * TODO : Supprimer le contact de la liste en fonction de son id
   * @param {string} id : contact ayant cet id
   * @returns le résultat de la modification
   */
  async deleteContactById (id) {
    await this.dbService.db.collection(CONTACTS_COLLECTION).deleteOne({id: { $eq: parseInt(id) } });
    const filter = { id: { $gt: parseInt(id) } };
    const incQuery = { $inc: { id: -1 } };
    await this.dbService.db.collection(CONTACTS_COLLECTION).updateMany(filter, incQuery);
    return await his.dbService.db.collection(CONTACTS_COLLECTION).find({}).toArray();
  }

  /**
   * Remplir la collection avec les contacts par défaut
   */
  async populateDb () {
    await this.dbService.populateDb(CONTACTS_COLLECTION, defaultContacts.contacts);
  }
}

module.exports = { ContactsService };
