import RecipeDisplayer from "./recipe_displayer.js";
import RecipeManager from "./recipe_manager.js";

const recipeManager = new RecipeManager();
export const loadRecipe = async (recipeManager) => {
  /**
   * Permet d'obtenir le paramètre d'id dans l'URL
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Location/search
   * @link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
   */
  const urlParams = new URLSearchParams(document.location.search);
  const displayer = new RecipeDisplayer();
  const recipe = await recipeManager.getRecipe(parseInt(urlParams.get("id")));
  displayer.displayRecipe(recipe);
};

loadRecipe(recipeManager);
