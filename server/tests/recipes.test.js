/* eslint-disable no-magic-numbers */
const app = require("../server");
const jsonManager = require("../js/routes/recipes").jsonManager;
const supertest = require("supertest");
const request = supertest(app);
const recipes = require("../data/recipes.json").recipes;

const API_URL = "/api/recipes";

describe("Recipes API tests", () => {
  afterAll(async () => {
    jest.clearAllMocks();
    app.close();
  });
  it("GET request to api/recipes/ should get all Recipes and return 200", async () => {
    const response = await request.get(`${API_URL}/`);
    expect(response.body).toEqual(recipes);
    expect(response.status).toBe(200);
  });

  it("GET request to api/recipes/ should get correct recipe with valid ID and return 200", async () => {
    const recipe = recipes.find((x) => x.id === 2);
    const response = await request.get(`${API_URL}/2`);
    expect(response.body).toEqual(recipe);
    expect(response.status).toBe(200);
  });

  it("POST request to api/recipes/ should create a new Recipe and return 201", async () => {
    const recipe = { name: "Recette" };
    jest.spyOn(jsonManager, "addNewRecipe").mockImplementation(() => {});
    const response = await request.post(`${API_URL}/`).send(recipe).set("Accept", "application/json");
    expect(response.status).toBe(201);
  });

  it("POST request to api/recipes/ should not create a new Recipe if no body and return 400", async () => {
    const recipe = {};
    jest.spyOn(jsonManager, "addNewRecipe").mockImplementation(() => {});
    const response = await request.post(`${API_URL}/`).send(recipe).set("Accept", "application/json");
    expect(response.status).toBe(400);
  });

  it("POST request to api/recipes/ should return 500 on error", async () => {
    jest.spyOn(jsonManager, "addNewRecipe").mockImplementation(() => {
      throw new Error("");
    });
    const recipe = { name: "Recette" };
    const response = await request.post(`${API_URL}/`).send(recipe).set("Accept", "application/json");
    expect(response.status).toBe(500);
  });

  it("DELETE request to api/recipes/ should delete an existing recipe and return 204 with a valid ID", async () => {
    jest.spyOn(jsonManager, "deleteRecipeByID").mockImplementation(async () => true);
    const response = await request.delete(`${API_URL}/2`);
    expect(response.status).toBe(204);
  });

  it("DELETE request to api/recipes/ should return 404 with an invalid ID", async () => {
    jest.spyOn(jsonManager, "deleteRecipeByID").mockImplementation(async () => false);
    const response = await request.delete(`${API_URL}/22`);
    expect(response.status).toBe(404);
  });

  it("DELETE request to api/recipes/ should return 500 on error", async () => {
    jest.spyOn(jsonManager, "deleteRecipeByID").mockImplementation(async () => {
      throw new Error("");
    });
    const response = await request.delete(`${API_URL}/1`);
    expect(response.status).toBe(500);
  });

  it("GET request to api/recipes/category should get correct recipes", async () => {
    const category = "keto";
    const recipe = recipes.filter((x) => x.category === category);
    const response = await request.get(`${API_URL}/category/${category}`);
    expect(response.body).toEqual(recipe);
    expect(response.status).toBe(200);
  });

  it("GET request to api/recipes/ingredient should get correct recipes", async () => {
    const ingredient = "oignon";
    const recipe = recipes
      .filter((recette) => recette.ingredients.find((ing) => ing.name.indexOf(ingredient) !== -1) !== undefined);
    const response = await request.get(`${API_URL}/ingredient/${ingredient}`);
    expect(response.body).toEqual(recipe);
    expect(response.status).toBe(200);
  });

  it("PATCH request to api/recipes/admin/reset should reset all recipies", async () => {
    jest.spyOn(jsonManager, "resetRecipes").mockImplementation(async () => {});
    const response = await request.patch(`${API_URL}/admin/reset`);
    expect(response.status).toBe(200);
  });

  it("PATCH request to api/recipes/admin/reset should return 500 on error", async () => {
    jest.spyOn(jsonManager, "resetRecipes").mockImplementation(async () => {
      throw new Error("");
    });
    const response = await request.patch(`${API_URL}/admin/reset`);
    expect(response.status).toBe(500);
  });
});
