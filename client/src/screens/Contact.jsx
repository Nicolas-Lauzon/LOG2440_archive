import { faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';
import contactFormService from '../services/contactForm.service';

export default function Contact() {
  const [contactInfos, setContactInfos] = useState({
    name: '',
    email: '',
    message: '',
  });

  /**
   * Gère la modification du formulaire en modifiant l'état de la variable contactInfos
   * TODO : gérer la modification du formulaire et mettre à jour la variable contactInfos
   * @param {*} event
   */
  const handleChange = (event) => {};

  /**
   * Transmet le formulaire au serveur et recharge la page pour vider le formulaire.
   * @param {*} event événement de soumission
   */
  const addContact = async (event) => {
    event.preventDefault();
    await contactFormService.submitForm(contactInfos);
    window.location.reload(false);
  };

  return (
    <>
      <NavBar />
      <main>
        <article>
          <h1>Contact</h1>
          <p>
            Contactez <em>Les recettes de PolyEats</em> via le formulaire suivant:
          </p>
          <form className='row form-group' onSubmit={addContact}>
            <fieldset className='form-control contact-control'>
              <legend>Envoyez-nous un message</legend>
              {/* TODO : gérer le changement du nom du Contact et l'événement onChange */}
              <label htmlFor='name'>Votre nom:</label>
              <input type='text' id='name' name='name' value={contactInfos.name} onChange={() => {}} required />
              {/* TODO : gérer le changement du courriel du Contact et l'événement onChange */}
              <label htmlFor='email'>Votre adresse courriel:</label>
              <input type='email' id='email' name='email' value={contactInfos.email} onChange={() => {}} required />

              {/* TODO : gérer le changement du message du Contact et l'événement onChange */}
              <label htmlFor='message'>Votre message</label>
              <textarea name='message' id='message' value={contactInfos.message} onChange={() => {}} required />
            </fieldset>

            <input className='btn' type='submit' value='Envoyez le message' />
          </form>
          <section className='row contact-info' aria-label='Informations de contact'>
            <div className='col'>
              <FontAwesomeIcon icon={faMobileAlt} size='5x' />
              <br />
              <a href='tel:5143404711'>(514) 340-4711</a>
            </div>

            <div className='col'>
              <FontAwesomeIcon icon={faMapMarkerAlt} size='5x' />
              <p className='address'>
                2900, boul. Édouard-Montpetit
                <br />
                Montréal (Québec)
                <br />
                H3T 1J4
              </p>
            </div>

            <div className='col'>
              <FontAwesomeIcon icon={faEnvelope} size='5x' />
              <br />
              <a href='mailto:recettesPolyEats@polymtl.ca'>recettesPolyEats@polymtl.ca</a>
            </div>
          </section>
        </article>
      </main>
      <PageFooter />
    </>
  );
}
