import RecipeManager from "../../assets/js/recipe_manager";
import { jest } from "@jest/globals";

describe("RecipeManager test", () => {
  let recipeManager;
  let storageManager;

  beforeEach(() => {
    recipeManager = new RecipeManager();
    storageManager = recipeManager.storageManager;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    localStorage.clear();
  });

  it("Recipe Manager is correctly created", () => {
    expect(recipeManager).not.toBeNull();
  });

  it("addRecipe should call saveData with the recipe", () => { });

  it("getRecipe should return undefined when given an invalid id", () => { });

  it("getRecipe should return a recipe when given a valid id", () => { });

  describe("filterRecipes test", () => {
    it("filterRecipes should return all recipes when no category is specified", () => { });

    it("filterRecipes should return one recipe when the category is vegetarien", () => { });

    it("filterRecipes should return 2 recipe when the category is mediterraneen", () => { });

    it("filterRecipes should return 2 recipe when the category is keto", () => { });
  });
  describe("filterByIngredient test", () => {
    it("filterByIngredient should return an empty list when searching an invalid ingredient", () => {
      const expected = [];
      const recipes = recipeManager.filterByIngredient("ornythorinque", false);

      expect(recipes).toEqual(expected);
    });

    it("filterByIngredient should return an empty list when searching an empty string with matchExact", () => {
      const expected = [];
      const recipes = recipeManager.filterByIngredient("", true);

      expect(recipes).toEqual(expected);
    });

    it("filterByIngredient should return all the recipes when searching an empty string without matchExact", () => {
      const expected = storageManager.getData().recipes;
      const recipes = recipeManager.filterByIngredient("", false);

      expect(recipes).toEqual(expected);
    });

    it("filterByIngredient should return a list with only the first recipe when searching for lime without matchExact", () => {
      const expected = storageManager.getData().recipes[0];
      const recipes = recipeManager.filterByIngredient("lime", false);

      expect(recipes).not.toBeUndefined();
      expect(recipes.length).toEqual(1);
      expect(recipes[0]).toEqual(expected);
    });

    it("filterByIngredient should return a list with 3 recipe when searching for oignon without matchExact", () => {
      const expected = 3;
      const recipes = recipeManager.filterByIngredient("oignon", false);

      expect(recipes).not.toBeUndefined();
      expect(recipes.length).toEqual(expected);
    });

    it("filterByIngredient should return one recipe when searching for oignon with matchExact", () => {
      const expected = 1;
      const recipes = recipeManager.filterByIngredient("oignon", true);

      expect(recipes.length).toEqual(expected);
    });
  });
});
