import { jest } from "@jest/globals";
import StorageManager from "../../assets/js/storage_manager";
import { export_recipe } from "../../assets/js/add_recipe";
import Form from "../../assets/js/form";

describe("Ajouter recette test", () => {
  let storageManager;
  let form;
  const assignMock = jest.fn();

  const setUpHTML = () => {
    const addForm = document.createElement("form");
    addForm.setAttribute("id", "add-recipe-form");
    document.body.appendChild(addForm);

    const btnSubmit = document.createElement("input");
    btnSubmit.setAttribute("type", "submit");
    btnSubmit.setAttribute("id", "btn-submit");
    addForm.appendChild(btnSubmit);

    const resetButton = document.createElement("button");
    const addStepButton = document.createElement("button");
    resetButton.setAttribute("id", "reset");
    addStepButton.setAttribute("id", "add-step");

    const steps = document.createElement("fieldset");
    steps.setAttribute("id", "steps");
    const step1 = document.createElement("fieldset");
    steps.appendChild(step1);
    document.body.appendChild(steps);
    document.body.appendChild(resetButton);
    steps.appendChild(addStepButton);
  };

  const clearHTML = () => (document.body.innerHTML = "");

  beforeEach(() => {
    storageManager = new StorageManager();
    form = new Form();
    // permet de un changement de page sans modifier le DOM
    delete window.location;
    window.location = { assign: assignMock };
    setUpHTML();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    assignMock.mockClear();
    clearHTML();
  });

  it(" resetData should call resetData method from storageManager", () => {
    const resetDataStorageSpy = jest.spyOn(storageManager, "resetData");
    export_recipe(storageManager, form);
    document.getElementById("reset").click();
    expect(resetDataStorageSpy).toBeCalled();
  });

  it(" addStep should add a new step to steps section in form", () => {
    export_recipe(storageManager, form);
    const stepAmountBefore = document.getElementById("steps").children.length;
    expect(stepAmountBefore).toEqual(2);
    document.getElementById("add-step").click();
    const stepAmountAfter = document.getElementById("steps").children.length;
    expect(stepAmountAfter).toEqual(3);
  });

  it(" submit event should call submitForm function on submit", async () => {
    const submitFormSpy = jest.spyOn(form, "submitForm");
    export_recipe(storageManager, form);
    const addForm = document.getElementById("add-recipe-form");
    addForm.dispatchEvent(new Event("submit"));
    expect(submitFormSpy).toBeCalled();
  });
});
