import RecipesDisplayer from "./recipes_displayer.js";

const displayer = new RecipesDisplayer();

export const loadRecipes = (displayer) => {
  /**
   * Configure les boutons de filtrage en ajoutant un gestionnaire de l'événement "click" à chaque bouton.
   *
   * Le gestionnaire permet d'appliquer un filtre sur les recettes affichées.
   *
   * Le gestionnaire ajoute la classe "selected" au bouton cliqué et l'enlève des autres boutons.
   */
  function configureFilters () {
    const recipeFilters = document.getElementById("recipes-filters");
    if (!recipeFilters) return;
    for (const element of recipeFilters.children) {
      element.addEventListener("click", () => {
        document.getElementsByClassName("selected")[0]?.classList.remove("selected");
        element.classList.add("selected");
        displayer.displayCategory(element.id);
      });
    }
  }

  /**
   * Configure la barre de recherche en ajoutant un gestionnaire de l'événement "submit" au bouton de recherche.
   *
   * Le gestionnaire permet d'appliquer un filtre sur les recettes affichées.
   *
   * Le gestionnaire retire la classe "selected" des boutons.
   */
  function configureSearch () {
    const form = document.getElementById("search-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      const selected = document.getElementsByClassName("selected");
      if (selected.length > 0) selected[0].classList.remove("selected");
      const ingredient = document.getElementById("search-bar").value;
      const matchExact = document.getElementById("match").checked;
      displayer.displayResearch(ingredient, matchExact);

      e.preventDefault();
    });
  }

  configureFilters();
  configureSearch();
  displayer.displayCategory();
};
loadRecipes(displayer);
