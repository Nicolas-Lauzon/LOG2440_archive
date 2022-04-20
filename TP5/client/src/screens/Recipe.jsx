import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import StepCard from '../components/StepCard';
import httpService from '../services/http.service';
import CheckList from '../components/CheckList';

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

  React.useEffect(async () => {
    setRecipe(await httpService.getRecipeByID(recipeId));
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
                  <CheckList values={recipe.ingredients} />
                </section>
                <section>
                  <h2>Le nécessaire pour la cuisson</h2>
                  <CheckList values={recipe.tools} />
                </section>
              </div>
            </div>
            <h1>Les étapes à suivre pour une recette réussite!</h1>
            <div className='recipe-container'>
              {recipe.steps.map((step) => (
                <StepCard step={step} />
              ))}
            </div>
          </article>
        )}
      </main>
      <PageFooter />
    </>
  );
}
