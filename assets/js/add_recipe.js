import RecipeManager from "./recipe_manager.js";

const recipeManager = new RecipeManager();

document.getElementById("add-step").addEventListener("click", () => {
  const step = document.getElementsByClassName("form-control").length - 1;

  const newField = document.createElement("fieldset");
  newField.className = "form-control";
  
  const legend = document.createElement("legend");
  legend.innerText = "Etape #" + String(step);

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "step_name_" + String(step);
  nameLabel.innerText = "Nom de l'étape:";
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", "true");
  nameInput.id = "step_name_" + String(step);
  
  const descriptionLabel = document.createElement("label");
  descriptionLabel.htmlFor = "step_description_" + String(step);
  descriptionLabel.innerText = "Description de l'étape:";
  const descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("required", "true");
  descriptionInput.id = "step_description_" + String(step);
  
  const imgLabel = document.createElement("label");
  imgLabel.htmlFor = "img_step_" + String(step);
  imgLabel.innerText = "Ajoutez une image pour cette étape:";
  const imgInput = document.createElement("input");
  imgInput.setAttribute("type", "file");
  imgInput.setAttribute("required", "true");
  imgInput.id = "img_step_" + String(step);
  imgInput.accept = "image/*" ;

  newField.appendChild(legend);
  newField.appendChild(nameLabel);
  newField.appendChild(nameInput);
  newField.appendChild(descriptionLabel);
  newField.appendChild(descriptionInput);
  newField.appendChild(imgLabel);
  newField.appendChild(imgInput);
  const lastStepField = document.getElementsByClassName("form-control")[step];

  lastStepField.parentNode.insertBefore(newField, lastStepField.nextSibling);
  console.log(newField);
});


document.getElementById("add-recipe-form").addEventListener("submit", async (event) => {

  const ingredientsList = [];
  const ingredientList = document.getElementById("ingredient").value;
  const array = ingredientList.split(",");
  for (const element of array) {
    const ingredientAndQuantity = element.split(":");
    const ingredient = {name : ingredientAndQuantity[0], quantity:ingredientAndQuantity[1]};
    ingredientsList.push(ingredient);
  }
  const toolsList = document.getElementById("outil").value;
  const toolList = toolsList.split(",");
  const numberSteps = document.getElementsByClassName("form-control").length - 1;
  const stepsList = [];
  for (let i = 1; i <= numberSteps; i++){
    const nameId = "step_name_"+ String(i);
    const imgId = "img_step_"+ String(i);
    const descriptionId = "step_description_"+ String(i);
    console.log(document.getElementById(nameId).value);
    const imageInput = document.getElementById(imgId).value;
    console.log(document.getElementById(descriptionId).value);
    const step = 
    {
      ordre: i,
      titre: document.getElementById(nameId).value,
      image: await getImageInput(imageInput),
      texte: document.getElementById(descriptionId).value,
    };
    stepsList.push(step);
  }
  console.log(ingredientsList);
  console.log(toolList);
  console.log(stepsList);
  const recipe = {
    id : recipeManager.recipeList.length() + 1,
    name : document.getElementById("name").value,
    time : document.getElementById("time").value,
    category : document.getElementById("type").value,
    img : await getImageInput(document.getElementById(img)),
    ingredients : ingredientsList,
    tools:toolList,
    steps: stepsList
  };
  
  recipe.id = recipeManager.recipeList.length() + 1;
  recipe.name = document.getElementById("name").value;
  recipe.time = document.getElementById("time").value;
  recipe.category = document.getElementById("type").value;
  recipe.img = await getImageInput(document.getElementById(img));
  
  
  recipeManager.addRecipe(recipe);
  console.log(recipe);
  console.log(recipeManager.recipeList);
});

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
const resetData = () => { 
  recipeManager.storageManager.resetData();
  location.href = "./recipes.html";
};

document.getElementById("reset").addEventListener("click", resetData);
