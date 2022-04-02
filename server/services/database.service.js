const { MongoClient } = require('mongodb');

const DB_USERNAME = 'Admin';
const DB_PASSWORD = 'admin1234';
const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.ldkwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const DB_DB = 'TP5';

class DatabaseService {
  /**
   * TODO : Remplir une collection de données seulement si la collection est vide
   * @param {string} collectionName nom de la collection sur MongoDB
   * @param {Array} data tableau contenant les documents à mettre dans la collection
   */
  async populateDb (collectionName, data) {}

  // Méthode pour établir la connection entre le serveur Express et la base de données MongoDB
  async connectToServer (uri = DB_URL) {
    try {
      this.client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      await this.client.connect();
      this.db = this.client.db(DB_DB);
      // eslint-disable-next-line no-console
      console.log('Successfully connected to MongoDB.');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }
}

const dbService = new DatabaseService();

module.exports = { dbService };
