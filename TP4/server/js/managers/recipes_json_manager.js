const path = require("path");
const { FileSystemManager } = require("./file_system_manager");

const fileSystemManager = new FileSystemManager();

class RecipeJsonManager {
  constructor () {
    this.JSON_PATH = path.join(__dirname + "../../../data/recipes.json");
  }

  /**
   * Lire le fichier JSON des recettes dans /data/recipes.json
   * @returns retourner les recettes dans le fichier
   */
  async getAllRecipes () {
    const fileBuffer = await fileSystemManager.readFile(this.JSON_PATH);
    const recipesContainer = JSON.parse(fileBuffer);
    return recipesContainer.recipes;
  }

  /**
   * @todo chercher une recette selon son id
   * @param {string} id : le id qui correspond à la recette que l'on cherche
   * @returns la recette correspondante si elle existe
   */
  async getRecipeByID (id) {
    const recipes = await this.getAllRecipes();
    return recipes.find((recipe) => String(recipe.id) === id);
  }

  /**
   * @todo chercher une recette selon sa catégorie
   * @param {string} category : le category qui correspond aux recettes que l'on cherche
   * @returns les recettes correspondantes
   */
  async getRecipesByCategory (category) {
    const recipes = await this.getAllRecipes();
    return recipes.filter((recipe) => recipe.category === category);
  }

  /**
   * Chercher une recette par ingrédient
   * @param {string} ingredient : nom de l'ingrédient à rechercher
   * @param {boolean} matchExact : cherche le nom exact d'ingrédient si true, sinon cherche un nom partiel
   * @returns les recettes trouvées ou un tableau vide
   */
  async getRecipesByIngredient (ingredient, matchExact) {
    const recipes = await this.getAllRecipes();
    return matchExact
      ? recipes.filter((recipe) => recipe.ingredients.find((ing) => ing.name === ingredient) !== undefined)
      : recipes.filter((recipe) => recipe.ingredients.find((ing) => ing.name.indexOf(ingredient) !== -1) !== undefined);
  }

  /**
   * @todo ajouter une recette à la liste des recettes
   * @param {*} newRecipe : la nouvelle recette à ajouter
   */
  async addNewRecipe (newRecipe) {
    const allRecipes = await this.getAllRecipes();
    const recipe = {};
    recipe.id = allRecipes.length + 1;
    recipe.name = newRecipe.name;
    recipe.src = newRecipe.src;
    recipe.time = newRecipe.time;
    recipe.category = newRecipe.category;
    recipe.img = newRecipe.img;
    recipe.ingredients = newRecipe.ingredients;
    recipe.tools = newRecipe.tools;
    recipe.steps = newRecipe.steps;
    allRecipes.push(recipe);
    const finalList = { "recipes": allRecipes };
    await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(finalList));
  }

  /**
   * @todo supprimer la recette de la liste et mettre à jour la liste
   * @param {string} id : recette ayant cet id
   * @returns true si la suppression a réussi, false sinon
   */
  async deleteRecipeByID (id) {
    const recipes = await this.getAllRecipes();
    let finalList = recipes.filter((recipe) => String(recipe.id) !== id);
    if (finalList.length === recipes.length) {
      return false;
    }
    finalList = { "recipes": finalList };
    await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify(finalList));
    return true;
  }

  /**
   * Réinitialiser les recettes en remplaceant le fichier recipes.json par default.JSON
   */
  async resetRecipes () {
    const DEFAULT_PATH = this.JSON_PATH.replace("recipes", "default");
    const defaultRecipes = await fileSystemManager.readFile(DEFAULT_PATH);
    const recipes = JSON.parse(defaultRecipes).recipes;
    await fileSystemManager.writeToJsonFile(this.JSON_PATH, JSON.stringify({ recipes }));
  }
}

module.exports = { RecipeJsonManager };
