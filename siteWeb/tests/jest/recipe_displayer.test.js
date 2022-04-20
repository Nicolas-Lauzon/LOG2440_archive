import { jest } from "@jest/globals";
import RecipeDisplayer from "../../assets/js/recipe_displayer";

describe("RecipeDisplayer test", () => {
  const testDiv = document.createElement("div");
  document.body.appendChild(testDiv);

  // TODO : Configurer un DOM minimal pour les tests
  const setUpHTML = () => {
    const recipeArticle = document.createElement("article");
    recipeArticle.setAttribute("class", "recipe-article");

    const recipeHeader = document.createElement("h1");
    recipeHeader.setAttribute("class", "recipe-header");

    recipeArticle.appendChild(recipeHeader);

    const recipeImg = document.createElement("img");
    recipeImg.setAttribute("class", "recipe-image");
    recipeImg.setAttribute("alt", "fake alt");
    recipeImg.setAttribute("src", "fake src");

    const toolList = document.createElement("ul");
    toolList.setAttribute("id", "tools-list");

    const ingredientList = document.createElement("ul");
    ingredientList.setAttribute("id", "list-ingredients");

    const recipeContainer = document.createElement("div");
    recipeContainer.setAttribute("class", "recipe-container");

    document.body.appendChild(recipeArticle);
    document.body.appendChild(toolList);
    document.body.appendChild(ingredientList);
    document.body.appendChild(recipeImg);
    document.body.appendChild(recipeContainer);
  };

  const clearHTML = () => (document.body.innerHTML = "");

  let recipe = {};
  let displayer;

  beforeEach(() => {
    displayer = new RecipeDisplayer();
    recipe = {
      id: 0,
      name: "stub name",
      src: "stub src",
      time: "stub src",
      category: "stub category",
      img: "stub img",
      ingredients: [
        {
          name: "stub ingredient name",
          quantity: "stub quantity"
        }
      ],
      tools: ["stub tool"],
      steps: [
        {
          order: "stub order",
          title: "stub step title",
          image: "stub step img",
          text: "stub step text"
        }
      ]
    }; // TODO : definir un Stub
    setUpHTML();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    clearHTML();
  });

  it(" should not change the display if recipe is undefined", () => {
    const startingHTML = document.innerHTML;
    recipe = undefined;
    displayer.displayRecipe(recipe);
    expect(startingHTML).toEqual(document.innerHTML)
  });

  it(" should change the display if recipe is not undefined", () => {
    const startingHTML = document.body.innerHTML;
    displayer.displayRecipe(recipe);
    expect(startingHTML).not.toEqual(document.body.innerHTML);
  });

  it("should call displayTools, displayIngredients and displaySteps", () => {
    const displayToolsSpy = jest.spyOn(displayer, "displayTools");
    const displayIngredientsSpy = jest.spyOn(displayer, "displayIngredients");
    const displayStepsSpy = jest.spyOn(displayer, "displaySteps");
    displayer.displayRecipe(recipe);
    expect(displayToolsSpy).toBeCalled();
    expect(displayIngredientsSpy).toBeCalled();
    expect(displayStepsSpy).toBeCalled();
  });
});
