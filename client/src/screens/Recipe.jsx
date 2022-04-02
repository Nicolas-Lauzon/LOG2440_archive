import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';

export default function Recipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    img: {},
    ingredients: [],
    tools: [],
    steps: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const urlParams = new URLSearchParams(useLocation().search);
  const recipeId = urlParams.get('id');

  // TODO : Récupérer la recette du serveur pour modifier la variable recipe
  // et mettre la variable isLoading à false par la suite
  React.useEffect(async () => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <NavBar />
      <main>
        {isLoading ? (
          <div className='loader-container'>
            <CircularProgress color='success' />
          </div>
        ) : (
          <article id='recipe-article'>
            <h1 className='recipe-header'>{recipe.name}</h1>
            <button type='button' className='btn' onClick={window.print} id='print-btn'>
              Imprimer
            </button>
            <div className='row'>
              <div className='col'>
                <img className='recipe-image' alt={recipe.name} src={recipe.img} />
              </div>
              <div className='col'>
                <section>
                  <h2>Liste d'ingrédients</h2>
                  {/* TODO : Ajouter le component CheckList pour les ingrédients de la recette */}
                  <div />
                </section>
                <section>
                  <h2>Le nécessaire pour la cuisson</h2>
                  {/* TODO : Ajouter le component CheckList pour les outils de la recette */}
                  <div />
                </section>
              </div>
            </div>
            <h1>Les étapes à suivre pour une recette réussite!</h1>
            <div className='recipe-container'>
              {/* TODO : Ajouter le component StepCard pour chaque étape de la recette */}
              {recipe.etapes.map((step) => (
                <div />
              ))}
            </div>
          </article>
        )}
      </main>
      <PageFooter />
    </>
  );
}
