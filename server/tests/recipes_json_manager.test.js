const path = require("path");
const fs = require("fs");
const { RecipeJsonManager } = require("../js/managers/recipes_json_manager");
const recipes = require("../data/recipes.json").recipes;

async function restoreRecipes () {
  const filePath = path.join(__dirname + "/recipes_test.json");
  await fs.promises.writeFile(filePath, JSON.stringify({ recipes }));
}

describe("Recipe JSON Manager tests", () => {
  let recipeJSONManager;
  const TEST_JSON_PATH = path.join(__dirname + "/recipes_test.json");

  beforeEach(() => {
    recipeJSONManager = new RecipeJsonManager();
    recipeJSONManager.JSON_PATH = TEST_JSON_PATH;
  });

  afterEach(async () => {
    await restoreRecipes();
  });

  it("getAllRecipes should return all Recipes", async () => {
    const allRecipes = await recipeJSONManager.getAllRecipes();
    expect(allRecipes).toEqual(recipes);
  });

  it("getRecipeByID should return a specific Recipe with a valid ID", async () => {
    const id = 1;
    const recipe = await recipeJSONManager.getRecipeByID(id);
    const expectedRecipeName = "Bol protéiné à la mexicaine";
    expect(recipe.name).toEqual(expectedRecipeName);
  });

  it("getRecipeByID should return undefined with invalid ID", async () => {
    const id = 99;
    const recipe = await recipeJSONManager.getRecipeByID(id);
    expect(recipe).toEqual(undefined);
  });

  it("getRecipesByCategory should return all Recipes with a valid category", async () => {
    const category = "keto";
    const recipes = await recipeJSONManager.getRecipesByCategory(category);
    const recipesMap = recipes.map((x) => x.id);
    const expectedRecipes = [1, 2];
    expect(recipesMap).toEqual(expectedRecipes);
  });

  it("getRecipesByIngredient should return all Recipes with an ingredient and not exact match", async () => {
    const ingredient = "oignon";
    const recipes = await recipeJSONManager.getRecipesByIngredient(ingredient, false);
    const recipesMap = recipes.map((x) => x.id);
    // eslint-disable-next-line no-magic-numbers
    const expectedRecipes = [1, 2, 4];
    expect(recipesMap).toEqual(expectedRecipes);
  });

  it("getRecipesByIngredient should return all Recipes with an ingredient and an exact match", async () => {
    const ingredient = "oignon";
    const recipes = await recipeJSONManager.getRecipesByIngredient(ingredient, true);
    const recipesMap = recipes.map((recipe) => recipe.id);
    const expectedRecipes = [1];
    expect(recipesMap).toEqual(expectedRecipes);
  });

  it("addNewRecipe should add a new Recipe to the JSON", async () => {
    const recipe = { name: "Recette Test" };
    const originalSize = recipes.length;
    await recipeJSONManager.addNewRecipe(recipe);
    const newSize = JSON.parse(await fs.promises.readFile(TEST_JSON_PATH)).recipes.length;
    expect(newSize).toEqual(originalSize + 1);
  });

  it("deleteRecipeByID should delete an existing Recipe with valid ID", async () => {
    const id = 1;
    const originalSize = recipes.length;
    const result = await recipeJSONManager.deleteRecipeByID(id);
    const newSize = JSON.parse(await fs.promises.readFile(TEST_JSON_PATH)).recipes.length;
    expect(newSize).toEqual(originalSize - 1);
    expect(result).toEqual(true);
  });

  it("deleteRecipeByID should not delete an existing Recipe with an invalid ID", async () => {
    const id = 99;
    const originalSize = recipes.length;
    const result = await recipeJSONManager.deleteRecipeByID(id);
    const newSize = JSON.parse(await fs.promises.readFile(TEST_JSON_PATH)).recipes.length;
    expect(newSize).toEqual(originalSize);
    expect(result).toEqual(false);
  });

  it("resetRecipes should restore the JSON to its default values", async () => {
    const DEFAULT_PATH = TEST_JSON_PATH.replace("recipes", "default");
    const defaultContent = JSON.parse(await fs.promises.readFile(DEFAULT_PATH)).recipes;
    await recipeJSONManager.resetRecipes();
    const newContent = JSON.parse(await fs.promises.readFile(TEST_JSON_PATH)).recipes;
    expect(newContent).toEqual(defaultContent);
  });
});
