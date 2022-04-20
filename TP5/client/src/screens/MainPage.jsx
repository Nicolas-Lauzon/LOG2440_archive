import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import PageFooter from '../components/PageFooter';

export default function MainPage() {
  return (
    <>
      <NavBar />
      <main>
        <article className='justify-container'>
          <div>
            <h1>Le site n&deg;1 de recettes!</h1>
            <p>Découvrez nos différentes recettes</p>
            <NavLink className='btn' to='/recipes'>
              En savoir plus <FontAwesomeIcon icon={faAngleDoubleRight} />
            </NavLink>
          </div>
          <img alt='home' src='img/home.jpg' id='home-img' />
        </article>
      </main>
      <PageFooter />
    </>
  );
}
