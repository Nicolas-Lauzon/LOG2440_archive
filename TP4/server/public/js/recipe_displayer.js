export default class RecipeDisplayer {
  /**
   * Affiche toutes les informations de la recette (nom, image, outils, ingrédients et étapes) en générant l'HTML correspondant.
   *
   * @param {*} recipe recette à afficher
   */
  displayRecipe (recipe) {
    if (!recipe) return;

    document.getElementsByClassName("recipe-header")[0].textContent = recipe.name;
    const image = document.getElementsByClassName("recipe-image")[0];
    image.alt = recipe.name;
    image.src = recipe.img;

    document.getElementById("tools-list").innerHTML = this.displayTools(recipe.tools).innerHTML;
    document.getElementById("list-ingredients").innerHTML = this.displayIngredients(recipe.ingredients).innerHTML;
    document.getElementsByClassName("recipe-container")[0].innerHTML = this.displaySteps(recipe.steps, recipe.name).innerHTML;
  }

  /**
   * Affiche les informations des outils nécessaires pour la recette
   * Génère l'HTML correspondant.
   *
   * @param {*} tools outils à afficher
   * @returns div contenant les des balises outils créées
   */
  displayTools (tools) {
    const listTools = document.createElement("div");
    listTools.textContent = "";

    for (const tool of tools) {
      const row = document.createElement("li");
      listTools.appendChild(row);

      const input = document.createElement("input");
      input.type = "checkbox";
      row.appendChild(input);

      const label = document.createElement("label");
      label.textContent = tool;
      row.appendChild(label);
    }

    return listTools;
  }

  /**
   * Affiche les informations des ingrédients nécessaires pour la recette
   * Génère l'HTML correspondant.
   *
   * @param {*} ingredients ingrédients à afficher
   * @returns div contenant les balises des ingrédients créées
   */
  displayIngredients (ingredients) {
    const listIngredients = document.createElement("div");
    listIngredients.textContent = "";

    for (const ingredient of ingredients) {
      const row = document.createElement("li");
      listIngredients.appendChild(row);

      const input = document.createElement("input");
      input.type = "checkbox";
      row.appendChild(input);

      const label = document.createElement("label");
      label.textContent = `${ingredient.quantity} ${ingredient.name}`;
      row.appendChild(label);
    }

    return listIngredients;
  }

  /**
   * Affiche les informations des étapes nécessaires pour la recette
   * Génère l'HTML correspondant.
   *
   * @param {*} steps étapes de la recette
   * @param {string} name nom de la recette
   * @returns div contenant les balises des étapes créées
   */
  displaySteps (steps, name) {
    const recipeContainer = document.createElement("div");
    recipeContainer.textContent = "";

    for (const step of steps) {
      const div = document.createElement("div");
      div.classList.add("recipe-step");
      div.id = `recipe-step-${step.order}`;
      recipeContainer.appendChild(div);

      const image = document.createElement("img");
      image.classList.add("recipe-image");
      image.alt = `${name}, étape ${step.order}`;
      image.src = step.image;
      div.appendChild(image);

      const text_name = document.createElement("h2");
      text_name.textContent = `${step.order}. ${step.title}`;
      div.appendChild(text_name);

      const text = document.createElement("p");
      text.textContent = step.text;
      div.append(text);
    }

    return recipeContainer;
  }
}
