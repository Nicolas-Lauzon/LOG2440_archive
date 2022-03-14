import Form from "./form.js";

const form = new Form();
export const export_recipe = (form) => {
  document.getElementById("add-step")?.addEventListener("click", () => {
    const steps = document.getElementById("steps");
    const nextStepNumber = steps.children.length - 1;

    steps.insertBefore(form.createStep(nextStepNumber), document.getElementById("add-step"));
  });

  document.getElementById("add-recipe-form")?.addEventListener("submit", () => {
    form.submitForm(document.getElementById("add-recipe-form")).catch(() => {});
  });
};

export_recipe(form);
