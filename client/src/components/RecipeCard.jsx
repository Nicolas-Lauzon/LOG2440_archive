import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  return (
    <div className='recipe'>
      {/* TODO : Configurer le lien dynamique en fonction de l'attribut id de la recette et les paramètres de la recette */}
      <NavLink className='recipe-link' to={`/recipe?id=${0 + 1}`}>
        <h2>{recipe.name}</h2>
        <img alt={recipe.name} src={recipe.img} />
        <p className='time'>
          <FontAwesomeIcon icon={faClock} /> {recipe.time} minutes
        </p>
      </NavLink>
    </div>
  );
}
