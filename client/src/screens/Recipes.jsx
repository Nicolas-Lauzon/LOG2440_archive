import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import CategoryButtonGroup from '../components/CategoryButtonGroup';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import httpService from '../services/http.service';

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [ingredientInput, setIngredientInput] = useState('');
  const [exactMatch, setExactMatch] = useState(false);

  React.useEffect(async () => {
    setRecipes(await httpService.fetchAllRecipes());
    setIsLoading(false);
  }, []);

  /**
   * Sélectionner la catégoire, vider la barre de recherche et récupérer les recettes à partir du serveur
   * @param {*} category catégorie à utiliser pour le filtrage côté serveur
   */
  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setIngredientInput('');
    setIsLoading(true);
    setRecipes(await httpService.getRecipesByCategory(category));
    setIsLoading(false);
  };

  /**
   * TODO : Gérer la recherche par ingrédient:
   * Récupérer les recettes à partir du serveur
   * Si ingredientInput est vide, le système récupère toutes les recettes
   */
  const searchByIngredient = async (e) => {
    e.preventDefault();
  };

  /**
   * TODO : Changer l'état de la variable exactMatch lors d'un changement du "toggle"
   */
  const toggleExactMatch = () => {};

  return (
    <>
      <NavBar />
      <main>
        <section className='recipes-type' aria-label='Filtres'>
          <h2>Catégories</h2>
          <CategoryButtonGroup selectedCategory={selectedCategory} handleClick={handleCategoryChange} />
        </section>
        <section className='recipes-type' aria-label='Recherche'>
          <h2>Recherche par ingrédient</h2>
          {/* TODO : Ajouter le component IngredientSearchBar en configurant les bonnes propriétés */}
          <div />
        </section>
        <article>
          <span className='right-header' id='recipes-count'>
            {recipes.length} recette{recipes.length > 1 ? 's' : ''}
          </span>
          <h1>Recettes</h1>
          <div className='recipes' id='recipes-list'>
            {/* TODO : Ajouter le component RecipeCard pour chaque recette si isLoading est à false */}
            {isLoading ? (
              <div className='loader-container'>
                <CircularProgress color='success' />
              </div>
            ) : (
              recipes.map((recipe) => <div />)
            )}
          </div>
        </article>
      </main>
      <PageFooter />
    </>
  );
}
