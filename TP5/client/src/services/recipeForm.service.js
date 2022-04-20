import httpService from './http.service';

class RecipeFormService {
  constructor() {
    this.httpService = httpService;
  }

  /**
   * Soumet un formulaire de recettes au serveur
   * Construit dynamiquement l'information à partir des informations de la recette
   * et d'une liste d'étapes
   * @param {*} recipeInfos informations générales de la recette
   * @param {*} recipeSteps étapes pour la recette
   */
  async submitForm(recipeInfos, recipeSteps) {
    const recipe = {
      name: recipeInfos.name,
      src: '',
      time: recipeInfos.time,
      category: recipeInfos.type,
      img: await this.getImageFile(recipeInfos.img),
      tools: recipeInfos.tools.split(','),
      ingredients: [],
      steps: [],
    };
    recipeInfos.ingredients.split(',').forEach((ingredient) => {
      const ingredientObject = ingredient.split(':');
      recipe.ingredients.push({
        name: ingredientObject[0],
        quantity: ingredientObject[1] ? ingredientObject[1] : '',
      });
    });
    for (const step of recipeSteps) {
      // console.log(step.img);
      recipe.steps.push({
        order: step.order,
        title: step.title,
        text: step.text,
        image: await this.getImageFile(step.img),
      });
    }

    this.httpService.addNewRecipe(recipe);
  }

  /**
   * Fonction qui permet d'extraire une image à partir d'un fichier
   * @param {File} file fichier à lire
   * @returns image ajoutée dans un formulaire
   */
  async getImageFile(file) {
    const image = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

    return image;
  }
}

const recipeFormService = new RecipeFormService();
export default recipeFormService;
