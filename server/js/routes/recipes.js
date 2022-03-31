const { RecipeJsonManager } = require("../managers/recipes_json_manager");
const { HTTP_STATUS } = require("../utils/http");
const router = require("express").Router();

const jsonManager = new RecipeJsonManager();

/**
 * La route correspondante dans ce fichier est /recettes
 */

/**
 * @todo renvoyer le contenu json de toutes les recettes
 * @returns toutes les recettes sauvegardées
 */
router.get("/", async (request, response) => {
  try {
    const allRecipes = await jsonManager.getAllRecipes();
    response.status(HTTP_STATUS.SUCCESS);
    response.json(allRecipes);
  } catch (error) { response.status(HTTP_STATUS.NO_CONTENT).end(); }
});

/**
 * @todo ajouter la nouvelle recette dans le fichier json
 */
router.post("/", async (request, response) => {
  try {
    if (!Object.keys(request.body).length) {
      response.status(HTTP_STATUS.BAD_REQUEST).send();
      return;
    }
    await jsonManager.addNewRecipe(request.body);
    response.status(201);
  } catch (error) {
    response.status(500).end();
  }
});

/**
 * @todo renvoyer une recette spécifique selon un id
 * @returns la recette si le id existe. Sinon, une erreur 404 pour indiquer que la recette n'existe pas
 */
router.get("/:id", async (request, response) => {
  try {
    const recipe = await jsonManager.getRecipeByID(request.params.id);
    if (!recipe) {
      response.status(HTTP_STATUS.NOT_FOUND).end();
      // response.json("404");
    }

    response.status(HTTP_STATUS.SUCCESS);
    response.json(recipe);
  } catch (error) { response.status(HTTP_STATUS.NO_CONTENT).end(); }
});

/**
 * @todo supprimer une recette spécifique selon un id
 */
router.delete("/:id", async (request, response) => {
  try {
    const success = await jsonManager.deleteRecipeByID(request.params.id);
    if(!success) {
      response.status(404).end();
    }
    response.status(204);
    response.json(success);
  } catch (error) { response.status(500).end(); }
});

/**
 * @todo renvoyer les recettes spécifiques selon une catégorie
 * @returns les recettes appartenant à une catégorie
 */
router.get("/category/:category", async (request, response) => {
  try {
    const recipes = await jsonManager.getRecipesByCategory(request.params.category);
    response.status(HTTP_STATUS.SUCCESS);
    response.json(recipes);
  } catch (error) { response.status(HTTP_STATUS.NO_CONTENT).end(); }
});

/**
 * @todo renvoyer les recette spécifiques selon un ingrédiants et matchExact
 * @ingredient fait partie des paramètres de la requête
 * @matchExact fait partie de la query de la requête
 * @returns les recettes ayant ces ingrédiants
 */
router.get("/ingredient/:ingredient", async (request, response) => {
  try {
    const byIngredient = await jsonManager.getRecipesByIngredient(request.params.ingredient, request.query.matchExact);
    response.status(HTTP_STATUS.SUCCESS);
    response.json(byIngredient);
  } catch (error) { response.status(501).end(); }
});

/**
 * Permet de remplacer la liste des recettes par la liste par défaut
 */
router.patch("/admin/reset", async (request, response) => {
  try {
    await jsonManager.resetRecipes();
    response.status(HTTP_STATUS.SUCCESS).send();
  } catch (error) {
    response.status(HTTP_STATUS.SERVER_ERROR).send();
  }
});

module.exports = { router, jsonManager };
