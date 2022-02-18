import { jest } from "@jest/globals";
import RecipesDisplayer from "../../assets/js/recipes_displayer";
import { loadRecipes } from "../../assets/js/recipes";

describe("Recettes test", () => {
  let filter1;
  let filter2;
  let displayer;

  const setUpHTML = () => {
    const recipesFilters = document.createElement("div");
    filter1 = document.createElement("button");
    filter2 = document.createElement("button");
    filter1.classList.add("selected");

    const form = document.createElement("form");
    form.setAttribute("id", "search-form");
    const searchBar = document.createElement("input");
    searchBar.setAttribute("id", "search-bar");
    const match = document.createElement("input");
    match.setAttribute("id", "match");
    form.appendChild(searchBar);
    form.appendChild(match);

    recipesFilters.setAttribute("id", "recipes-filters");
    recipesFilters.appendChild(filter1);
    recipesFilters.appendChild(filter2);
    document.body.appendChild(recipesFilters);
    document.body.appendChild(form);
  };

  const clearHTML = () => (document.body.innerHTML = "");

  beforeEach(() => {
    displayer = new RecipesDisplayer();
    setUpHTML();
    loadRecipes(displayer);
  });

  afterEach(() => {
    jest.restoreAllMocks();
    clearHTML();
  });

  it(" clicking on filter2 should add the class selected to filter2", () => { });

  it(" submiting the form should call displayResearch", () => { });

  it(" submiting the form should not remove selected class if no buttons are selected", () => {
    const form = document.getElementById("search-form");
    const selectedFilter = document.getElementsByClassName("selected")[0];
    selectedFilter.classList.remove("selected");

    form.dispatchEvent(new Event("submit"));

    expect(document.getElementsByClassName("selected").length).toBe(0);
  });
});
