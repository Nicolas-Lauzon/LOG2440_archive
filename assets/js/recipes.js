import RecipeManager from "./recipe_manager.js";

const recipeManager = new RecipeManager();

configureFilters();
displayRecipes();

/**
 * Configure les boutons de filtrage en ajoutant un gestionnaire de l'événement "click" à chaque bouton.
 *
 * Le gestionnaire permet d'appliquer un filtre sur les recettes affichées.
 *
 * Le gestionnaire ajoute la classe "selected" au bouton cliqué et l'enlève des autres boutons.
 */
function configureFilters () { }

/**
 * Affiche les recettes qui correspondent au filtre de tri en générant le HTML approprié.
 *
 * Met à jour le nombre de recettes affichées.
 * @param {string} category categorie de filtre
 */
function displayRecipes (category) { }

/**
 * Mets à jour le nombre de recettes affichées sur la page
 * @param {number} nb
 */
function updateRecipesNumber (nb) { }
