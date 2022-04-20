import { jest } from "@jest/globals";
import { loadRecipe } from "../../assets/js/recipe";
import RecipeManager from "../../assets/js/recipe_manager";

describe("Recette test", () => {
  let recipeManager;
  beforeEach(() => {
    recipeManager = new RecipeManager();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    localStorage.clear();
  });

  it(" should call getRecipe from recipeManager", () => {
    const getRecipSpy = jest.spyOn(recipeManager, "getRecipe").mockImplementation(() => {});
    loadRecipe(recipeManager);
    expect(getRecipSpy).toBeCalled();
  });
});
