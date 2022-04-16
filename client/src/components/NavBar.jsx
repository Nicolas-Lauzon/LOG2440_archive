import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  // const sampleLocation = useLocation();
  console.log(window.location.href);
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
            <li>
              <NavLink to='./recipes' exact activeClassName='activeNav'>
                Trouver une recette
              </NavLink>
            </li>
            <li>
              <NavLink to='./add_recipe' exact activeClassName='activeNav'>
                Ajouter une recette
              </NavLink>
            </li>
            <li>
              <NavLink to='./contact' exact activeClassName='activeNav'>
                Contact
              </NavLink>
            </li>
            {(window.location.href === 'http://localhost:5010/admin') ? <li><NavLink to='./admin' exact activeClassName='activeNav'>Admin</NavLink></li> : null}
          </ul>
        </nav>
      </div>
    </header>
  );
}
