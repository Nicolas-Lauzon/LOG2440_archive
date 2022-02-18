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

  it("Storage Manager should get 5 recipes from LocalStorage", () => { });

  it("Storage Manager should load recipes if the localStorage is empty", () => {
    const setItemSpy = jest.spyOn(localStorageInstance.__proto__, "setItem").mockImplementation(() => {});
  });

  it("Storage Manager should not load recipes if the localStorage has data", () => {
    const setItemSpy = jest.spyOn(localStorageInstance.__proto__, "setItem").mockImplementation(() => {});
  });

  it("Storage Manager should add a new recipe to LocalStorage", () => { });

  it("Storage Manager should clear LocalStorage", () => { });
});
