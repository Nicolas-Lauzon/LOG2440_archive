import RecipeManager from "./recipe_manager.js";

const recipeManager = new RecipeManager();

document.getElementById("add-step").addEventListener("click", () => {});

document.getElementById("add-recipe-form").addEventListener("submit", async (event) => { });

/**
 * Fonction qui permet d'extraire une image à partir d'un file input
 * @param {HTMLInputElement} input
 * @returns image ajoutée dans un formulaire
 */
async function getImageInput (input) {
  if (input && input.files && input.files[0]) {
    const image = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(reader.result);
      reader.readAsDataURL(input.files[0]);
    });

    return image;
  }
}

/**
 * Permet de vider le LocalStorage des recettes sauvegardés localement
 * Redirige l'utilisateur à la page "recipes.html"
 * @see Window.location
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/location
 */
const resetData = () => { };

document.getElementById("reset").addEventListener("click", resetData);
