import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddRecipe from './screens/AddRecipe';
import Admin from './screens/Admin';
import Contact from './screens/Contact';
import Error from './screens/Error';
import MainPage from './screens/MainPage';
import Recipe from './screens/Recipe';
import Recipes from './screens/Recipes';
import './style.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/recipes' component={Recipes} />
      <Route exact path='/recipe' component={Recipe} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/add_recipe' component={AddRecipe} />
      <Route exact path='/admin' component={Admin} />
      <Route path='*' component={Error} />
    </Switch>
  );
}

export default App;
