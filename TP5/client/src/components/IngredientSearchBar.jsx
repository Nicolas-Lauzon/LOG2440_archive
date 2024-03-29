import React from 'react';

export default function IngredientSearchBar(props) {
  const { handleSubmit, handleChange, value, exactMatch, handleMatchChange } = props;

  return (
    <form onSubmit={() => { handleSubmit(); }} action='#' id='search-form'>
      <div className='search-group'>
        <input type='search' value={value} onChange={(e) => handleChange(e.target.value)} id='search-bar' />
        <input className='btn' id='search' type='submit' value='Rechercher' />
      </div>
      <div className='search-group'>
        <h3>Match exact</h3>
        <label className='switch' htmlFor='match'>
          <input type='checkbox' id='match' checked={exactMatch} onChange={() => { handleMatchChange(); }} />
          <span className='slider round' />
        </label>
      </div>
    </form>
  );
}
