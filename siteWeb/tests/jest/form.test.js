import Form from "../../assets/js/form";
import { jest } from "@jest/globals";

describe("Form test", () => {
  let form;
  beforeEach(() => {
    form = new Form();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    localStorage.clear();
  });

  it(" should return a fieldset element when createStep is called", () => { });

  it(" should add new recipe to localData when submitForm is called", async () => {
    const formStub = document.createElement("div");
    // TODO : Remplir le formulaire
    formStub.elements = { };

    const mockJson = { "recipes": [] }
    const expected = {
      recipes: [
        {
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
        }
      ]
    };

    localStorage.setItem("localData", JSON.stringify(mockJson));

    await form.submitForm(formStub);

    expect(JSON.parse(localStorage.getItem("localData"))).toEqual(expected);
  });

  it(" should call readAsDataURL on the first file of the input when getImageInput is called", async () => {
    const fileReader = new FileReader();
    const spy = jest.spyOn(fileReader.__proto__, "readAsDataURL");
    const mockFileInput = { files: [new Blob()] };
    await form.getImageInput(mockFileInput);

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(mockFileInput.files[0]);
  });
});
