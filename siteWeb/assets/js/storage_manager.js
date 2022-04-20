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
    if (!localStorage.getItem("localData")) {
      localStorage.setItem("localData", JSON.stringify(recipes));
    }
  }

  /**
   * Récupère les recettes à partir de local storage
   * @returns les recettes du LocalStorage
   */
  getData () {
    return JSON.parse(localStorage.getItem("localData"));
  }

  /**
   * Sauvegarde une nouvelle recette en mettant à jour l'objet dans LocalStorage
   * @param {*} newRecipe nouvelle recette à ajouter dans le storage
   */
  saveData (newRecipe) {
    const localData = this.getData();
    localData.recipes.push(newRecipe);
    localStorage.setItem("localData", JSON.stringify(localData));
  }

  /**
   * Vide le LocalStorage en supprimant tout son contenu
   */
  resetData () {
    localStorage.clear();
  }
}
