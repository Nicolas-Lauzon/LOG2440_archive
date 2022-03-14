import RecipeManager from "./recipe_manager.js";

export default class Form {
  constructor () {
    this.recipeManager = new RecipeManager();
  }

  // Note : l'utilisation de "innerHTML" est donnée ici à titre d'exemple.
  // Lorsque possible, priorisez l'utilisation des méthodes createElement et appendChild lors de la construction de HTML
  createStep (stepNumber) {
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("form-control");
    fieldset.innerHTML = `
      <legend>Étape #${stepNumber}</legend>
      
      <label for="step_name_${stepNumber}">Nom de l'étape:</label>
      <input type="text" id="step_name_${stepNumber}" required>
      
      <label for="step_description_${stepNumber}">Description de l'étape:</label>
      <input type="text" id="step_description_${stepNumber}" required>
      
      <label for="img_step_${stepNumber}">Ajouter une image pour cette étape:</label>
      <input type="file" id="img_step_${stepNumber}" accept="image/*" required>`;

    return fieldset;
  }

  async submitForm (form) {
    const elements = form.elements;
    const recipe = {};

    recipe.name = elements.name.value;
    recipe.src = "";
    recipe.time = elements.time.value;
    recipe.category = elements.type.value;
    recipe.img = await this.getImageInput(elements.img);
    recipe.ingredients = [];
    elements.ingredient.value.split(",").map((ingredient) => {
      ingredient = ingredient.split(":");
      recipe.ingredients.push({
        name: ingredient[0],
        quantity: ingredient[1] ? ingredient[1] : ""
      });
    });
    recipe.tools = elements.tool.value.split(",");

    recipe.steps = [];
    for (let i = 1; elements["step_name_" + String(i)] !== undefined; i++) {
      const step = {};
      step.order = i;
      step.title = elements["step_name_" + String(i)].value;
      step.text = elements["step_description_" + String(i)].value;
      step.image = await this.getImageInput(elements["img_step_" + String(i)]);

      recipe.steps.push(step);
    }

    this.recipeManager.addRecipe(recipe);
  }

  /**
   * Fonction qui permet d'extraire une image à partir d'un file input
   * @param {HTMLInputElement} input
   * @returns image ajoutée dans un formulaire
   */
  async getImageInput (input) {
    if (input && input.files && input.files[0]) {
      const image = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(reader.result);
        reader.readAsDataURL(input.files[0]);
      });

      return image;
    }
  }
}
