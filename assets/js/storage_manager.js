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
    const startingData = recipes;
    for (const i in startingData.recipes) {
      const currentId = startingData.recipes[i].id;
      if (localStorage.getItem(currentId) === null) {
        localStorage.setItem(currentId, JSON.stringify(startingData.recipes[i]));
      }
    }
  }

  /**
   * Récupère les recettes à partir de local storage
   * @returns les recettes du LocalStorage
   */
  getData () {
    const allKeys = Object.keys(localStorage);
    const recipesInStorage = [];
    for (const j in allKeys) {
      recipesInStorage[allKeys[j]] = JSON.parse(localStorage.getItem(allKeys[j].toString()))
    }
    return recipesInStorage;
  }

  /**
   * Sauvegarde une nouvelle recette en mettant à jour l'objet dans LocalStorage
   * @param {*} newRecipe nouvelle recette à ajouter dans le storage
   */
  saveData (newRecipe) {
    const keyToSave = newRecipe.id;
    localStorage.setItem(keyToSave, JSON.stringify(newRecipe));
  }

  /**
   * Vide le LocalStorage en supprimant tout son contenu
   */
  resetData () {
    localStorage.clear();
  }
}
