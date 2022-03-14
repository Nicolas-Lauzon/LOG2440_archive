import HTTPManager from "./http_manager.js";

export default class RecipeManager {
  constructor () {
    this.httpManager = new HTTPManager();
  }

  /**
   * Ajouter une recette à la liste des recettes en faisant appel à HTTPManager
   * @param {*} recipe : la nouvelle recette
   */
  async addRecipe (recipe) {
    return await this.httpManager.addNewRecipe(recipe);
  }

  /**
   * Obtient une recette par id à partir de HTTPManager
   * à partir de son id
   * @param {number} id
   * @returns la recette ayant l'id
   */
  async getRecipe (id) {
    return await this.httpManager.getRecipeByID(id);
  }

  /**
   * appeler getRecipesByCategory de HTTPManager pour faire la requête nécessaire
   * @param {*} category : la catégorie qu'on recherche
   * @returns les recettes appartenant à cette catégorie
   */
  async filterByCategory (category) {
    return await this.httpManager.getRecipesByCategory(category);
  }

  async filterByIngredient (ingredient, matchExact) {
    return await this.httpManager.getRecipesByIngredients(ingredient, matchExact);
  }
}
