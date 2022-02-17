import StorageManager from "./storage_manager.js";

export default class RecipeManager {
  constructor () {
    this.storageManager = new StorageManager();
    this.recipeList = this.storageManager.getData();
  }

  /**
   * Ajouter une recette à la liste des recettes et la sauvegarde localement
   * @param {*} recipe
   */
  addRecipe (recipe) {
    this.recipeList[recipe.id] = recipe;
    this.storageManager.saveData(recipe);
  }

  /**
   * Obtient une recette du storage local
   * à partir de son id ou undefined si aucune recette n'est trouvé
   * @param {number} id
   * @returns la recette ayant l'id ou undefined
   */
  getRecipe (id) {
    const allDataInStorage = this.storageManager.getData();
    return allDataInStorage[id];
  }

  /**
   * Filtre les recettes en fonction d'une catégorie et retourne le résultat
   * Si category est undefined ou null, toutes les recettes sont retournées
   * @param {string} category categorie de recette pour le filtre
   * @returns les recettes de la catégorie de recheche
   */
  filterRecipes (category) {
    const filteredList = [];
    for (const index in this.recipeList) {
      if (this.recipeList[index].category === category || category === undefined) {
        filteredList.push(this.recipeList[index]);
      }
    }
    return filteredList;
  }
}
