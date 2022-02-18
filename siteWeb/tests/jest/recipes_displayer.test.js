import { jest } from "@jest/globals";
import RecipesDisplayer from "../../assets/js/recipes_displayer";
describe("Afficheur de recettes", () => {
  let displayer;

  // TODO : Configurer un DOM minimal pour les tests
  const setUpHTML = () => { };

  const clearHTML = () => (document.body.innerHTML = "");

  beforeEach(() => {
    setUpHTML();
    displayer = new RecipesDisplayer();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    clearHTML();
  });
  it(" displayCategory should call displayRecipes", () => { });

  it(" displayResearch should call displayRecipes", () => { });

  it(" updateRecipesNumber should change the number of recipes in HTML", () => { });
});
