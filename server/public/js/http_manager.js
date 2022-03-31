const HTTPInterface = {
  SERVER_URL: "http://localhost:5000/api",

  GET: async function (endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`);
    return await response.json();
  },

  POST: async function (endpoint, data) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    });

    return await response.json();
  },

  DELETE: async function (endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    });
    return await response.status;
  },

  PATCH: async function (endpoint) {
    const response = await fetch(`${this.SERVER_URL}/${endpoint}`, {
      method: "PATCH"
    });
    return response.status;
  }
};

export default class HTTPManager {
  constructor () {
    this.recipes = {};
    this.recipesBaseURL = "recipes";
    this.contactsBaseURL = "contacts";
  }

  /**
   * @todo Obtenir toutes les recettes avec une requête vers /api/recipes
   * @returns
   */
  async fetchAllRecipes () {
    try {
      return await HTTPInterface.GET(`${this.recipesBaseURL}`);
    } catch (error) {
      console.log("error in fetchAllRecipes: " + error);
    }
  }

  /**
   * @todo Obtenir tous les messages de contact avec une requête vers /api/contacts
   * @returns
   */
  async fetchAllContacts () {
    try {
      return await HTTPInterface.GET(`${this.contactsBaseURL}`);
    } catch (error) {
      console.log("error in fetchAllContacts: " + error);
    }
  }

  /**
   * Récupérer toutes les recettes
   * @returns toutes les recettes récupérés du serveur
   */
  async getAllRecipes () {
    const recipesPromise = new Promise((resolve, reject) => {
      try {
        this.recipes = this.fetchAllRecipes();
        resolve(this.recipes);
      } catch (err) {
        reject("Échec lors de la requête GET /api/recipes");
      }
    });

    const recipesRecieved = Promise.resolve(recipesPromise);
    return recipesRecieved;
  }

  /**
   * @todo Récupérer une recette à travers son paramètre id
   * @param {*} id : le id qui correspond à la recette qu'on cherche
   * @returns la recette correspondante ou une rédirection vers la page error.html si recettes n'existe pas ou en cas d'erreurs
   */
  async getRecipeByID (id) {
    const returnedRecipe = await HTTPInterface.GET(`${this.recipesBaseURL}/${id}`);
    if (returnedRecipe === "404") {
      window.location.replace("http://localhost:5000/pages/error.html");
      window.alert("Error 404: Page not found");
      return;
    }
    return returnedRecipe;
  }

  /**
   * @todo Faire une requête vers /recipes/category/:category
   * Filtre les recettes en fonction d'une catégorie et retourne le résultat
   * Si category est undefined ou null, toutes les recettes sont retournées
   * @param {string} category categorie de recette pour le filtre
   * @returns les recettes de la catégorie de recheche
   */
  async getRecipesByCategory (category) {
    if (!category) {
      return await this.getAllRecipes();
    }
    return await HTTPInterface.GET(`${this.recipesBaseURL}/category/${category}`);
  }

  /**
   * @todo Faire une requête vers /recipes/ingredient/:ingredient?matchExact
   * Filtre les recettes en fonction d'un ingrédient et retourne le résultat
   * Le paramètre matchExact est passée comme paramètre de query s'il est vrai
   *
   * Ex : /recipes/ingredient/ingredient?matchExact=true si le paramètre est à true
   * sinon : /recipes/ingredient/ingredient
   * @param {string} ingredient ingrédient pour le filtre
   * @param {boolean} matchExact recherche exacte ou non pour l'ingrédient
   * @returns les recettes de la catégorie de recheche
   */
  async getRecipesByIngredients (ingredient, matchExact) {
    if (matchExact) {
      return await HTTPInterface.GET(`${this.recipesBaseURL}/ingredient/${ingredient}?matchExact=true`);
    } else { return await HTTPInterface.GET(`${this.recipesBaseURL}/ingredient/${ingredient}`); }
  }

  /**
   * @todo Envoyer la nouvelle recette au serveur pour la stocker dans la liste des recettes
   * @param {*} newRecipe
   */
  async addNewRecipe (newRecipe) {
    try {
      await HTTPInterface.POST(`${this.recipesBaseURL}`, newRecipe);
    } catch (error) { console.log("Error in post :", error);}
  }

  /**
   * @todo Supprimer une recette identifiée par son id
   * @param {*} id: recette à supprimer
   */
  async deleteRecipe (id) {
    try {
      await HTTPInterface.DELETE(`${this.recipesBaseURL}/${id}`);
    } catch (error) { console.log("Error in delete : " + error); }
  }


  /**
   * @todo Supprimer un contact identifié par son id
   * @param {*} id: contact à supprimer
   */
  async deleteContact (id) {
    try{
      await HTTPInterface.DELETE(`${this.contactsBaseURL}/${id}`);
    } catch (error) { console.log("Error in delete : " + error); }
  }

  /**
   * Réinitialiser la liste des recettes
   */
  async resetRecipes () {
    try {
      await HTTPInterface.PATCH(`${this.recipesBaseURL}/admin/reset`);
    } catch (error) {
      console.log("An error has occured while reseting recipes", error);
    }
  }
}
