import RecipeManager from "./recipe_manager.js";

const recipeManager = new RecipeManager();

export default class RecipesDisplayer {
  /**
   * Affiche les recettes qui correspondent au filtre de tri en générant le HTML approprié.
   *
   * Met à jour le nombre de recettes affichées.
   * @param {string} category categorie de filtre
   */
  async displayCategory (category) {
    this.displayRecipes(await recipeManager.filterByCategory(category));
  }

  /**
   * Affiche les recettes qui contiennent l'ingrédient écrit en générant le HTML approprié.
   *
   * Met à jour le nombre de recettes affichées.
   * @param {string} ingredient string de l'ingrédient à match
   * @param {string} matchExact booléen représentant si le string doit correspondre exactement à la recherche
   */
  async displayResearch (ingredient, matchExact) {
    this.displayRecipes(await recipeManager.filterByIngredient(ingredient, matchExact));
  }

  /**
   * Affiche les recettes en générant le HTML approprié.
   *
   * Met à jour le nombre de recettes affichées.
   * @param {*} recipes les recettes à afficher.
   */
  displayRecipes (recipes) {
    const recipesList = document.getElementById("recipes-list");
    if (!recipesList) return;
    recipesList.textContent = "";

    this.updateRecipesNumber(recipes.length);

    for (const recipe of recipes) {
      const div = document.createElement("div");
      div.classList.add("recipe");
      recipesList.appendChild(div);

      const link = document.createElement("a");
      link.classList.add("recipe-link");
      link.href = `recipe?id=${recipe.id}`;
      link.title = "Consultez la recette détaillée";
      div.appendChild(link);

      const name = document.createElement("h2");
      name.textContent = recipe.name;
      link.appendChild(name);

      const image = document.createElement("img");
      image.alt = recipe.name;
      image.src = recipe.img;
      link.appendChild(image);

      const time = document.createElement("p");
      time.classList.add("time");
      link.append(time);

      const icon = document.createElement("i");
      icon.classList.add("far", "fa-clock");
      time.append(icon, ` ${recipe.time} minutes`);
    }
  }

  /**
   * Mets à jour le nombre de recettes affichées sur la page
   * @param {number} nb
   */
  updateRecipesNumber (nb) {
    const count = document.getElementById("recipes-count");
    count.innerText = String(nb) + " recettes";
  }
}
