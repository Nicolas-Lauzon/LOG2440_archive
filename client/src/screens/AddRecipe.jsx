import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import recipeFormService from '../services/recipeForm.service';

export default function AddRecipe() {
  const [recipeInfos, setRecipeInfos] = useState({
    name: '',
    type: 'vegetarien',
    time: '',
    ingredients: '',
    tools: '',
    img: {},
  });
  const [steps, setSteps] = useState([
    {
      order: 1,
      title: '',
      img: {},
      text: '',
    },
  ]);
  const imgRef = React.createRef(); // référence vers l'image de la recette

  /**
   * Gestion du changement des valeurs du formulaire et mise à jour des images si une des images est modifiée
   * @param {Event} e événement de changement du formulaire
   */
  const handleChange = (e) => {
    const recipeInfosCopy = { ...recipeInfos };
    recipeInfosCopy[e.target.id] = e.target.id === 'img' ? imgRef.current.files[0] : e.target.value;
    setRecipeInfos(recipeInfosCopy);
  };

  // TODO : Ajouter une nouvelle étape dans la liste des étapes avec un numéro d'ordre incrémenté
  const addStep = () => {
    const newStep = {
      order: steps.length + 1,
      title: '',
      img: {},
      text: '',
    };
  };

  /**
   * Gestion de la modification d'une étape déjà existante
   * @param {*} updatedStep l'état modifié d'une étape déjà existante
   */
  const updateStep = (updatedStep) => {
    const updatedSteps = steps.map((step) => (step.order === updatedStep.order ? { ...updatedStep } : { ...step }));
    setSteps(updatedSteps);
  };

  /**
   * Gestion de l'envoi de la recette au serveur.
   * Envoyer la recette au serveur et recharger la page pour vider le formulaire
   * @param {*} event événement d'envoi du formulaire
   */
  const addRecipe = async (event) => {
    event.preventDefault();
    // TODO Envoyer la recette au serveur
    await recipeFormService.submitForm(undefined, undefined);
    window.location.reload(false);
  };

  return (
    <>
      <NavBar />
      <main>
        <article>
          <h1>Ajouter votre propre recette!</h1>
          <br />

          <form className='form-group' id='add-recipe-form' onSubmit={addRecipe}>
            <fieldset className='form-control'>
              <legend>Ajouter les informations de la recette</legend>

              {/* TODO : gérer le changement du nom de la Recette et l'événement onChange */}
              <label htmlFor='name'>Nom de la recette:</label>
              <input type='text' id='name' value={recipeInfos.name} onChange={() => {}} required />

              {/* TODO : gérer le changement du type de la Recette et l'événement onChange */}
              <label htmlFor='type'>Sélectionner le type de recette:</label>
              <select id='type' value={recipeInfos.type} onChange={() => {}} required>
                <option value='' disabled>
                  Choisissez
                </option>
                <option value='vegetarien'>Végétarienne</option>
                <option value='mediterraneen'>Méditérranéenne</option>
                <option value='keto'>Keto</option>
                <option value='autre'>Autre</option>
              </select>

              {/* TODO : gérer le changement du temps de la Recette et l'événement onChange */}
              <label htmlFor='time'>Temps de préparation (min):</label>
              <input type='text' id='time' value={recipeInfos.time} onChange={() => {}} required />

              {/* TODO : gérer le changement des ingrédients de la Recette et l'événement onChange */}
              <label htmlFor='ingredient'>
                Ajouter la liste d'ingrédients nécessaires (séparer les éléments (ingrédient:quantité) par une virgule):
              </label>
              <input type='text' id='ingredient' value={recipeInfos.ingredients} onChange={() => {}} required />

              {/* TODO : gérer le changement des outils de la Recette et l'événement onChange */}
              <label htmlFor='tool'>
                Ajouter la liste des outils de cuisson nécessaire (séparer les éléments par une virgule):
              </label>
              <input type='text' id='tool' value={recipeInfos.tools} onChange={() => {}} required />

              {/* TODO : gérer le changement de l'image de la Recette et l'événement onChange */}
              <label htmlFor='img'>Ajouter une image pour votre recette:</label>
              <input type='file' id='img' accept='image/*' onChange={() => {}} ref={imgRef} required />
            </fieldset>
            <fieldset className='form-control' id='steps'>
              <legend>Ajouter les étapes de la recette</legend>
              {/* TODO : Ajouter le component StepForm pour chaque étape de la recette */}
              {}
              <input id='add-step' className='btn' type='button' value='Ajouter une étape' onClick={addStep} />
            </fieldset>

            <input className='btn' type='submit' value='Ajouter la recette' />
          </form>
        </article>
      </main>
      <PageFooter />
    </>
  );
}
