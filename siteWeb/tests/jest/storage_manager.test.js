import StorageManager from "../../assets/js/storage_manager";
import dataRecipes from "../../data/recipes";
import { jest } from "@jest/globals";

describe("StorageManager test", () => {
  let storageManager;
  const recipes = dataRecipes.recipes;

  beforeEach(() => {
    storageManager = new StorageManager();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    localStorage.clear();
  });
  it("Storage Manager is correctly created", () => {
    expect(storageManager).not.toBeNull();
  });

  it("Storage Manager should get 5 recipes from LocalStorage", () => {
    const recipes = storageManager.getData().recipes;
    expect(recipes.length).toEqual(5);
   });

  it("Storage Manager should load recipes if the localStorage is empty", () => {
    const setItemSpy = jest.spyOn(localStorageInstance.__proto__, "setItem").mockImplementation(() => {});
  });

  it("Storage Manager should not load recipes if the localStorage has data", () => {
    const setItemSpy = jest.spyOn(localStorageInstance.__proto__, "setItem").mockImplementation(() => {});
  });

  it("Storage Manager should add a new recipe to LocalStorage", () => {
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
    storageManager.saveData(recipe);
    expect(storageManager.getData().recipes.length).toEqual(6);

   });

  it("Storage Manager should clear LocalStorage", () => {
    storageManager.resetData();
    expect(storageManager.getData()).toBeNull();
   });
});
