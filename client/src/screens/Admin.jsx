import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import httpService from '../services/http.service';

export default function Admin() {
  const [recipes, setRecipes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [render, setRender] = useState('');

  /**
   * TODO : Récupérer tous les recettes et contacts du serveur au chargement du Component
   * et mettre à jour les variables "recipes" et "contacts"
   */
  React.useEffect(async () => {}, []);

  /**
   * Envoie une demande de suppresion au serveur et recharge les recettes
   * @param {number} id l'identifiant de la recette à supprimer
   */
  const deleteRecipe = async (id) => {
    await httpService.deleteRecipe(id);
    setRecipes(await httpService.fetchAllRecipes());
  };

  /**
   * Envoie une demande de suppresion au serveur et recharge les contacts
   * @param {number} id l'identifiant du contact à supprimer
   */
  const deleteContact = async (id) => {
    await httpService.deleteContact(id);
    setContacts(await httpService.fetchAllContacts());
  };

  /**
   * Envoie une demande de réinitialisation des recettes au serveur et recharge les recettes
   */
  const resetRecipes = async () => {
    await httpService.resetRecipes();
    setTimeout(async () => setRecipes(await httpService.fetchAllRecipes()), 100);
  };

  /**
   * TODO : retourner le bon contenu HTML en fonction de la variable "render"
   * Component AdminRecipe pour chaque recette dans le cas de render ="recipes"
   * Component AdminContact pour chaque contact dans le cas de render ="contacts"
   * La chaîne "Cliquez sur un des boutons pour prendre une action" centrée autrement
   * @returns contenu HTML à présenter
   */
  const renderContent = () => {
    switch (render) {
      case 'recipes':
        return recipes.map(() => <div />);
      case 'contacts':
        return contacts.map(() => <div />);
      default:
        return <p className='middle'>Cliquez sur un des boutons pour prendre une action</p>;
    }
  };

  return (
    <>
      <NavBar />
      <main className='admin-main'>
        <div className='admin-actions'>
          <button type='button' className='btn' id='display-recipes-btn' onClick={() => setRender('recipes')}>
            Afficher Recettes
          </button>
          <button type='button' className='btn' id='display-contacts-btn' onClick={() => setRender('contacts')}>
            Afficher Contacts
          </button>
          <button type='button' className='btn' id='reset-contacts-btn' onClick={resetRecipes}>
            Réinitialiser Recettes
          </button>
        </div>
        <section>{renderContent()}</section>
      </main>
      <PageFooter />
    </>
  );
}
