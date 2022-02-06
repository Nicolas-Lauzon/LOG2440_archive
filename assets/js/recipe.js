import RecipeManager from "./recipe_manager.js";

const recipeManager = new RecipeManager();
/**
 * Permet d'obtenir le paramètre d'id dans l'URL
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Location/search
 * @link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 */
const urlParams = null;

displayRecipe("");

/**
 * Affiche toutes les informations de la recette (nom, image, outils, ingrédients et étapes) en générant l'HTML correspondant.
 *
 * @param {*} recipe recette à afficher
 */
function displayRecipe (recipe) { }

/**
 * Affiche les informations des outils nécessaires pour la recette
 * Génère l'HTML correspondant.
 *
 * @param {*} tools outils à afficher
 */
function displayTools (tools) { }

/**
 * Affiche les informations des ingrédients nécessaires pour la recette
 * Génère l'HTML correspondant.
 *
 * @param {*} ingredients ingrédients à afficher
 */
function displayIngredients (ingredients) { }

/**
 * Affiche les informations des étapes nécessaires pour la recette
 * Génère l'HTML correspondant.
 *
 * @param {*} steps ingrédients à afficher
 * @param {string} name nom de la recette
 */
function displaySteps (steps, name) { }
