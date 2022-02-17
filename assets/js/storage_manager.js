import recipes from "../../data/recipes.js";

export default class StorageManager {
  /**
   * Constructeur de la classe. Charge les données du LocalStorage
   */
  constructor () {
    this.loadDataFromFile();
  }

  /**
   * Charge les donnés de "recipes" dans LocalStorage si le storage ne les contient pas déjà
   */
  loadDataFromFile () {
    if (localStorage.getItem("allRecipes") === null) {
      const startingData = recipes;
      localStorage.setItem("allRecipes", JSON.stringify(startingData));
    }
  }

  /**
   * Récupère les recettes à partir de local storage
   * @returns les recettes du LocalStorage
   */
  getData () {
    const recipesInStorage = [];
    const allRecipes = JSON.parse(localStorage.getItem("allRecipes".toString()));
    for (const j in allRecipes.recipes) {
      recipesInStorage[j] = allRecipes.recipes[j];
    }
    return recipesInStorage;
  }

  /**
   * Sauvegarde une nouvelle recette en mettant à jour l'objet dans LocalStorage
   * @param {*} newRecipe nouvelle recette à ajouter dans le storage
   */
  saveData (newRecipe) {
    const currentDataStored = this.getData();
    currentDataStored.push(newRecipe);
    const objectToSave = {
      recipes: currentDataStored
    }
    localStorage.setItem("allRecipes", JSON.stringify(objectToSave));
  }

  /**
   * Vide le LocalStorage en supprimant tout son contenu
   */
  resetData () {
    localStorage.clear();
  }
}
