import AdminManager from "./admin_manager.js";

const adminManager = new AdminManager();
/**
 * Afficher toutes les recettes
 * Ajouter événement click sur les boutons pour supprimer recette
 */
const displayRecipes = async () => {
  await adminManager.displayRecipes();

  // boutons individuels
  document.querySelectorAll(".section-recipes-item .btn").forEach((element) => {
    element.addEventListener("click", () => adminManager.deleteRecipe(element.dataset.id));
  });
};

/**
 * Afficher tous les contacts
 * Ajouter événement click sur les boutons pour supprimer contacts
 */
const displayContacts = async () => {
  await adminManager.displayContacts();

  // boutons individuels
  document.querySelectorAll(".section-contacts-item .btn").forEach((element) => {
    element.addEventListener("click", () => adminManager.deleteContact(element.dataset.id));
  });
};

/**
 * Réinitialise les recettes à travers adminManager
 * Affiche la nouvelle liste de recettes à travers displayRecipes()
 */
const resetData = async () => {
  await adminManager.resetRecipes();
  await displayRecipes();
};

// 3 boutons principaux
document.getElementById("display-recipes-btn").addEventListener("click", displayRecipes);
document.getElementById("display-contacts-btn").addEventListener("click", displayContacts);
document.getElementById("reset-contacts-btn").addEventListener("click", resetData);
