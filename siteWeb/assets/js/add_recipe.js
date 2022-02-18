import StorageManager from "./storage_manager.js";
import Form from "./form.js";

const storageManager = new StorageManager();
const form = new Form();
export const export_recipe = (storageManager, form) => {
  document.getElementById("add-step")?.addEventListener("click", () => {
    const steps = document.getElementById("steps");
    const nextStepNumber = steps.children.length - 1;

    steps.insertBefore(form.createStep(nextStepNumber), document.getElementById("add-step"));
  });

  document.getElementById("add-recipe-form")?.addEventListener("submit", () => {
    form.submitForm(document.getElementById("add-recipe-form")).catch(() => {});
  });

  const resetButton = document.getElementById("reset");
  if (resetButton) resetButton.addEventListener("click", resetData);

  /**
   * Permet de vider le LocalStorage des recettes sauvegardés localement
   * Redirige l'utilisateur à la page "recettes.html"
   * @see Window.location
   * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/location
   */
  function resetData () {
    storageManager.resetData();
    window.location.href = "recipes.html";
  }
};

export_recipe(storageManager, form);
