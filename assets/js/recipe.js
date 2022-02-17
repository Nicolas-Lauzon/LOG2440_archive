import RecipeManager from "./recipe_manager.js";

const recipeManager = new RecipeManager();
/**
 * Permet d'obtenir le paramètre d'id dans l'URL
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Location/search
 * @link https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 */
const urlParams = new URLSearchParams(document.location.search);
const id = urlParams.get("id");
displayRecipe(recipeManager.getRecipe(id));

/**
 * Affiche toutes les informations de la recette (nom, image, outils, ingrédients et étapes) en générant l'HTML correspondant.
 *
 * @param {*} recipe recette à afficher
 */
function displayRecipe (recipe) {
  const recipeTitle = document.getElementsByClassName("recipe-header")[0];
  recipeTitle.innerText = recipe.name;
  const recipeImage = document.getElementsByClassName("recipe-image")[0];
  recipeImage.src = recipe.img;
  displayIngredients(recipe.ingredients);
  displayTools(recipe.tools);
  displaySteps(recipe.steps, recipe.name);
}

/**
 * Affiche les informations des outils nécessaires pour la recette
 * Génère l'HTML correspondant.
 *
 * @param {*} tools outils à afficher
 */
function displayTools (tools) {
  const displayedList = document.getElementById("tools-list");
  displayedList.innerHTML = "";
  for (const tool of tools) {
    const li = document.createElement('li');
    const input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    const label = document.createElement("LABEL");
    label.innerText = tool;
    li.appendChild(input);
    li.appendChild(label);
    displayedList.appendChild(li);
  }
}

/**
 * Affiche les informations des ingrédients nécessaires pour la recette
 * Génère l'HTML correspondant.
 *
 * @param {*} ingredients ingrédients à afficher
 */
function displayIngredients (ingredients) {
  const displayedList = document.getElementById("list-ingredients");
  displayedList.innerHTML = "";
  for (const ingredient of ingredients) {
    const li = document.createElement('li');
    const input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    const label = document.createElement("LABEL");
    label.innerText = ingredient.quantity + " " + ingredient.name;
    li.appendChild(input);
    li.appendChild(label);
    displayedList.appendChild(li);
  }
}

/**
 * Affiche les informations des étapes nécessaires pour la recette
 * Génère l'HTML correspondant.
 *
 * @param {*} steps ingrédients à afficher
 * @param {string} name nom de la recette
 */
function displaySteps (steps, name) {
  const recipeSteps = document.getElementsByClassName("recipe-container")[0];
  for (const step of steps) {
    const stepdiv = document.createElement("div");
    stepdiv.classList.add("recipe-step");
    const id = "recipe-step-" + step.ordre;
    stepdiv.id = id;

    const image = document.createElement("img");
    image.classList.add("recipe-image");
    image.src = step.image;
    const alt = name + ", etape " + step.ordre;
    image.alt = alt;

    const title = document.createElement("h2");
    const stepTitle = step.ordre + "." + step.titre;
    title.innerText = stepTitle;

    const text = document.createElement("p");
    text.innerHTML = step.texte;

    stepdiv.appendChild(image);
    stepdiv.appendChild(title);
    stepdiv.appendChild(text);
    recipeSteps.appendChild(stepdiv);
  }
}
