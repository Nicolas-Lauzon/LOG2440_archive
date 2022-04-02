import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header>
      <div className='header-container justify-container'>
        <div className='logo'>
          <a href='/'>
            <img alt='logo' src='img/logo.png' title='Accueil' />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='activeNav'>
                Accueil
              </NavLink>
            </li>
            {/* TODO : Ajouter des liens vers les pages /recipes, /add_recipe et /contact avec les bons titres */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
