const path = require("path");
const express = require("express");
const { HTTP_STATUS } = require("./js/utils/http");
const { FileSystemManager } = require("./js/managers/file_system_manager");
const recipesRoutes = require("./js/routes/recipes");
const contactsRoutes = require("./js/routes/contacts");

const app = express();
const PORT = 5000;
const SIZE_LIMIT = "10mb";
const PUBLIC_PATH = path.join(__dirname + "/public/");
const fileSystemManager = new FileSystemManager();

/**
 * initialiser les différents middlewares et routes
 */

// afficher chaque nouvelle requête dans la console
app.use((request, response, next) => {
  console.log(`New HTTP request: ${request.method} ${request.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: SIZE_LIMIT }));
app.use(express.static(PUBLIC_PATH)); // permet de situer les fichiers css, images et scripts qui sont dans /public

app.use("/api/recipes", recipesRoutes.router);
app.use("/api/contacts", contactsRoutes.router);

/**
 * Initialisation des différentes routes pour retourner le fichier html correspondant au client
 * @todo enlever les requêtes GET (/, /recipes, /recipe, /add_recipe, /contact)
 * afin de les remplacer par le GET (/*) général défini plus bas
 *
 */
/*app.get("/", (request, response) => {
  response.sendFile(PUBLIC_PATH + "pages/index.html");
});

app.get("/recipes", (request, response) => {
  response.sendFile(PUBLIC_PATH + "pages/recipes.html");
});

app.get("/recipe", (request, response) => {
  response.sendFile(PUBLIC_PATH + "pages/recipe.html");
});

app.get("/add_recipe", (request, response) => {
  response.sendFile(PUBLIC_PATH + "pages/add_recipe.html");
});

app.get("/contact", (request, response) => {
  response.sendFile(PUBLIC_PATH + "pages/contact.html");
});

app.get("/admin", (request, response) => {
  response.sendFile(PUBLIC_PATH + "pages/admin.html");
});*/

/**
 * Middleware qui est exécuté à chaque requête pour retourner le fichier HTML correspondant
 * @todo vérifier dynamiquement si un tel fichier html existe dans le dossier /pages selon le route en question
 * @returns la requête renvoie le fichier correspondant avec un code 200, ou bien une erreur HTTP 404 et la page error.html
 */
app.get("/*", async (request, response) => {
  let currentRoute = request.path.split("/")[1];
  currentRoute = currentRoute === "" ? "index" : currentRoute;
  try {
    await fileSystemManager.checkFile(PUBLIC_PATH + "/pages/" + currentRoute + ".html");
    response.sendFile(PUBLIC_PATH + "pages/" + currentRoute + ".html");
    response.status(HTTP_STATUS.SUCCESS);
  } catch (error) {
    response.sendFile(PUBLIC_PATH + "pages/" + "error.html");
    response.status(HTTP_STATUS.NOT_FOUND);
  }
});

/**
 * Se produit lorsque le serveur commence à écouter sur le port.
 */
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = server;
