import HTTPManager from "./http_manager.js";

export default class AdminManager {
  constructor () {
    this.httpManager = new HTTPManager();
  }

  /**
   * Afficher toutes les recettes
   */
  async displayRecipes () {
    const recipes = await this.httpManager.fetchAllRecipes();
    const section = document.querySelector(".admin-main section");
    section.innerHTML = "";

    recipes.forEach((recipe) => {
      section.innerHTML += `<div class="section-recipes-item section-item" data-id=${recipe.id}>
            <img alt="recipe-img" src="${recipe.img}" class="section-img" />
            <p class="section-title">${recipe.name}</p>
            <button class="btn section-trash-icon" data-id=${recipe.id}>
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
    });
  }

  /**
   * Afficher tous les contacts
   */
  async displayContacts () {
    const contacts = await this.httpManager.fetchAllContacts();
    const section = document.querySelector(".admin-main section");
    section.innerHTML = "";

    contacts.forEach((contact) => {
      section.innerHTML += `<div class="section-contacts-item section-item" data-id=${contact.id}>
            <div class="section-header">
              <p class="section-contact-name">${contact.name}</p>
              <small>${contact.email}</small>
            </div>
            <p class="section-contact-message">${contact.message}</p>
            <button class="btn section-trash-icon" data-id=${contact.id}>
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
    });
  }

  /**
   * @todo Appeler HTTPManager pour supprimer la recette
   * Enlever la recette correspondante du DOM
   * @param {*} id id de la recette à supprimer
   */
  async deleteRecipe (id) {
    const deleteValue = await this.httpManager.deleteRecipe(id);
    this.removeElementFromDOM(".section-recipes-item", id);
    console.log(deleteValue);
  }

  /**
   * @todo Appeler HTTPManager pour supprimer le contact
   * Enlever la recette correspondante du DOM
   * @param {*} id id du contact à supprimer
   */
  async deleteContact (id) {
    // TODO
    const deleteValue = await this.httpManager.deleteContact(id);
    this.removeElementFromDOM(".section-contacts-item", id);
  }

  /**
   * @todo Appeler HTTPManger pour réinitialiser les recettes
   */
  async resetRecipes () {
    await this.httpManager.resetRecipes();
  }

  /**
   * Enlever un noeud du DOM s'il correspond au id qu'on veut enlever
   * @param {*} className : la classe sur laquelle itérer (soit recettes soit contacts)
   * @param {*} id : le id qui correspond à l'objet supprimé
   */
  removeElementFromDOM (className, id) {
    document.querySelectorAll(className).forEach((element) => {
      if (element.dataset.id === id) {
        element.remove();
      }
    });
  }
}
