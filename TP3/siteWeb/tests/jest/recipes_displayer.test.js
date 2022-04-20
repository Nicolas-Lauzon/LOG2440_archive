import { jest } from "@jest/globals";
import RecipesDisplayer from "../../assets/js/recipes_displayer";
describe("Afficheur de recettes", () => {
  let displayer;

  // TODO : Configurer un DOM minimal pour les tests
  const setUpHTML = () => {
    const recipeList = document.createElement("div");
    recipeList.setAttribute("id", "recipes-list");
    const counter = document.createElement("span");
    counter.setAttribute("id", "recipes-count");
    counter.innerText = "6 recettes";
    document.body.appendChild(recipeList);
    document.body.appendChild(counter);
  };

  const clearHTML = () => (document.body.innerHTML = "");

  beforeEach(() => {
    setUpHTML();
    displayer = new RecipesDisplayer();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    clearHTML();
  });
  it(" displayCategory should call displayRecipes", () => {
    const displayRecipesSpy = jest.spyOn(displayer, "displayRecipes").mockImplementation(() => {});
    displayer.displayCategory("test");
    expect(displayRecipesSpy).toBeCalled();
  });

  it(" displayResearch should call displayRecipes", () => {
    const displayRecipesSpy = jest.spyOn(displayer, "displayRecipes").mockImplementation(() => {});
    displayer.displayResearch("testIngrediant", true);
    expect(displayRecipesSpy).toBeCalled();
  });

  it(" updateRecipesNumber should change the number of recipes in HTML", () => {
    displayer.updateRecipesNumber(3);
    const htmlCounterValue = document.getElementById("recipes-count").innerText;
    expect(htmlCounterValue).toEqual("3 recettes");
  });

  it(" displayRecipes should create a <p> element for the time", () => {
    displayer.displayRecipes([{ "id": 0, "name": "myname", "img": "fakeimg", "ingredients": [{ "name": "fake ing name" }] }]);
    expect(document.getElementById("recipes-list").contains(document.getElementsByClassName("time")[0])).toBeTruthy();
  });
});