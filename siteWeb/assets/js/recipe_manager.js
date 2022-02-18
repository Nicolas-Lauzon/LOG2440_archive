import StorageManager from "./storage_manager.js";

export default class RecipeManager {
  constructor () {
    this.storageManager = new StorageManager();
  }

  /**
   * Ajouter une recette à la liste des recettes et la sauvegarde localement
   * @param {*} recipe
   */
  addRecipe (recipe) {
    const recipes = this.storageManager.getData().recipes;
    recipe.id = recipes.length + 1;
    this.storageManager.saveData(recipe);
  }

  /**
   * Obtient une recette du storage local
   * à partir de son id ou undefined si aucune recette n'est trouvé
   * @param {number} id
   * @returns la recette ayant l'id ou undefined
   */
  getRecipe (id) {
    const recipes = this.storageManager.getData().recipes;
    return recipes.find((recipe) => {
      return recipe.id === id;
    });
  }

  /**
   * Filtre les recettes en fonction d'une catégorie et retourne le résultat
   * Si category est undefined ou null, toutes les recettes sont retournées
   * @param {string} category categorie de recette pour le filtre
   * @returns les recettes de la catégorie de recheche
   */
  filterRecipes (category) {
    const recipes = this.storageManager.getData().recipes;
    return category ? recipes.filter((recipe) => recipe.category === category) : recipes;
  }

  /**
   * Filtre les recettes en fonction d'un ingrédient et retourne le résultat
   * Si l'attribut matchExact est true, seulement les recettes qui ont exactement cet ingrédient sont retournées
   * Sinon, la fonction retourne les recettes dont au moins 1 des ingrédients contient la chaine ingredient
   * @param {string} ingredient nom de l'ingrédient pour le filtre
   * @param {boolean} matchExact comparaison exacte avec le nom de l'ingrédient
   * @returns les recettes filtrés par ingrédient
   */
  filterByIngredient (ingredient, matchExact) {
    return [];
  }
}
