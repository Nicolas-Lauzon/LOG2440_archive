const { dbService } = require('./database.service');
const defaultRecipes = require('../data/defaultRecipes.json');

const RECIPES_COLLECTION = 'recipes';

class RecipesService {
  constructor () {
    this.dbService = dbService;
  }

  /**
   * @returns la collection de recettes de la BD
   */
  get collection () {
    return this.dbService.db.collection(RECIPES_COLLECTION);
  }

  /**
   * TODO : Récupérer toutes les recettes de la collection
   * @returns les recettes de la collection
   */
  async getAllRecipes () {
    return await this.dbService.db.collection(RECIPES_COLLECTION).find({}).toArray();
  }

  /**
   * TODO : Récupérer une recette selon son id
   * @param {string} id : le id qui correspond à la recette que l'on cherche
   * @returns la recette correspondante
   */
  async getRecipeById (id) {
    return await this.dbService.db.collection(RECIPES_COLLECTION).findOne({ id: { $eq: parseInt(id) } });
  }

  /**
   * TODO : Récupérer des recettes selon leur catégorie
   * @param {string} category : la catégorie qui correspond aux recettes que l'on cherche
   * @returns les recettes correspondantes
   */
  async getRecipesByCategory (category) {
    return await this.dbService.db.collection(RECIPES_COLLECTION).find({ category: { $eq: category } }).toArray();
  }

  /**
   * TODO : Récupérer des recette par ingrédient
   * @param {string} ingredient : nom de l'ingrédient à rechercher
   * @param {boolean} matchExact : cherche le nom exact d'ingrédient si true, sinon cherche un nom partiel
   * @returns les recettes trouvées ou un tableau vide
   */
  async getRecipesByIngredient (ingredient, matchExact) {
    if (matchExact) {
      const searchArg = { ingredients: { $elemMatch: { name: ingredient } } };
      return await this.dbService.db.collection(RECIPES_COLLECTION).find(searchArg).toArray();
    }
    const searchArg = { ingredients: { $elemMatch: { name: { $regex: ingredient } } } };
    const test = await this.dbService.db.collection(RECIPES_COLLECTION).find(searchArg).toArray();
    console.log(test);
    return test;
  }

  /**
   * TODO : Supprimer la recette de la collection en fonction de son id
   * @param {string} id : id de la recette à supprimer
   * @returns le résultat de la modification
   */
  async deleteRecipeById (id) {
    return undefined;
  }

  /**
   * TODO : Ajouter une recette à la liste des recettes
   * @param {*} recipe : la nouvelle recette à ajouter
   */
  async addNewRecipe (recipe) {}

  /**
   * Réinitialiser les recettes en supprimant la collection puis en la repeuplant
   */
  async resetRecipes () {
    await this.collection.deleteMany({});
    this.populateDb();
  }

  /**
   * Remplir la collection avec les recettes par défaut
   */
  async populateDb () {
    await this.dbService.populateDb(RECIPES_COLLECTION, defaultRecipes.recipes);
  }
}

module.exports = { RecipesService };
