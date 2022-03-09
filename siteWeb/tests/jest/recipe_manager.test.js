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

  it("addRecipe should call saveData with the recipe", () => {
    const recipe = {
      name: 'stub',
      src: '',
      time: '10',
      category: 'keto',
      ingredients: [
        {
          name: "ingredient #1",
          quantity: "1"
        },
        {
          name: "ingredient #2",
          quantity: ""
        }
      ],
      tools: [
        "outil #1",
        "outil #2"
      ],
      steps: [
        {
          order: 1,
          text: "description1",
          title: "etape1"
        },
        {
          order: 2,
          text: "description2",
          title: "etape2"
        }
      ],
      id: 1
    };
    const spy = jest.spyOn(storageManager, "saveData");
    recipeManager.addRecipe(recipe);
    expect(spy).toHaveBeenCalledWith(recipe);
   });

  it("getRecipe should return undefined when given an invalid id", () => {
    const recipe = recipeManager.getRecipe(100);
    expect(recipe).toBeUndefined();
   });

  it("getRecipe should return a recipe when given a valid id", () => {
    const recipe = recipeManager.getRecipe(1);
    expect(recipe).not.toBeUndefined();
    expect(recipe).toEqual(storageManager.getData().recipes[0]);
   });

  describe("filterRecipes test", () => {
    it("filterRecipes should return all recipes when no category is specified", () => {
      const expected = storageManager.getData().recipes.length;
      const recipes = recipeManager.filterRecipes('');
      expect(recipes.length).toEqual(expected);
     });

    it("filterRecipes should return one recipe when the category is vegetarien", () => {
      const recipes = recipeManager.filterRecipes('vegetarien');
      expect(recipes.length).toEqual(1);
     });

    it("filterRecipes should return 2 recipe when the category is mediterraneen", () => {
      const recipes = recipeManager.filterRecipes('mediterraneen');
      expect(recipes.length).toEqual(2);
     });

    it("filterRecipes should return 2 recipe when the category is keto", () => {
      const recipes = recipeManager.filterRecipes('keto');
      expect(recipes.length).toEqual(2);
     });
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
