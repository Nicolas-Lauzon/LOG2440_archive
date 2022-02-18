import { jest } from "@jest/globals";
import RecipeDisplayer from "../../assets/js/recipe_displayer";

describe("RecipeDisplayer test", () => {
  const testDiv = document.createElement("div");
  document.body.appendChild(testDiv);

  // TODO : Configurer un DOM minimal pour les tests
  const setUpHTML = () => {};

  const clearHTML = () => (document.body.innerHTML = "");

  let recipe = {};
  let displayer;

  beforeEach(() => {
    displayer = new RecipeDisplayer();
    recipe = { }; // TODO : definir un Stub
    setUpHTML();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    clearHTML();
  });

  it(" should not change the display if recipe is undefined", () => { });

  it(" should change the display if recipe is not undefined", () => { });

  it("should call displayTools, displayIngredients and displaySteps", () => { });
});
