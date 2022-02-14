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
function configureFilters () {
  const allButtons = document.getElementById("recipes-filters").getElementsByTagName("button");

 
  Array.prototype.forEach.call(allButtons, (value) => {
    value.addEventListener("click", () => {
      for (let buttonIndex = 0; buttonIndex < allButtons.length; buttonIndex++) {
        allButtons[buttonIndex].classList.remove("selected");
      }
      value.classList.add("selected");
      displayRecipes(value.id === "" ? undefined : value.id);
    })
  })
}

/**
 * Affiche les recettes qui correspondent au filtre de tri en générant le HTML approprié.
 *
 * Met à jour le nombre de recettes affichées.
 * @param {string} category categorie de filtre
 */
function displayRecipes (category) {
  const displayedList = document.getElementById("recipes-list");
  displayedList.innerHTML = "";
  const contentTodisplay = recipeManager.filterRecipes(category);
  for (const index in contentTodisplay) {
    const recipeName = contentTodisplay[index].name;
    const imageSrc = contentTodisplay[index].img;
    const recipeTime = contentTodisplay[index].time;
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");

    const linkDiv = document.createElement("a");
    recipeDiv.appendChild(linkDiv);
    linkDiv.href = "./recipe.html?id=" + String(contentTodisplay[index].id);
    linkDiv.classList.add("recipe-link");
    linkDiv.title = "Consultez la recette détaillée";

    const recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipeName;

    const recipeImg = document.createElement("img");
    recipeImg.alt = recipeName;
    recipeImg.src = imageSrc;

    const timeSection = document.createElement("p");
    timeSection.classList.add("time");
    timeSection.textContent = " " + recipeTime + " minutes";

    const timeLogo = document.createElement("i");
    timeLogo.className = "far fa-clock";

    linkDiv.appendChild(recipeTitle);
    linkDiv.appendChild(recipeImg);
    linkDiv.appendChild(timeSection);
    timeSection.prepend(timeLogo);

    displayedList.appendChild(recipeDiv);
  }
  updateRecipesNumber(displayedList.childElementCount);
}

/**
 * Mets à jour le nombre de recettes affichées sur la page
 * @param {number} nb
 */
function updateRecipesNumber (nb) {
  const recipeNumber = document.getElementById("recipes-count");
  recipeNumber.innerHTML = String(nb) + " recettes";
}
