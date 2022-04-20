import React from 'react';

export default function CheckList({ values }) {
  return (
    <ul className='check-list'>
      {values.map((value) => (
        <li key={value.name || value}>
          <input id={value.name || value} type='checkbox' />
          <label htmlFor={value.name || value}>{value.name ? `${value.quantity} ${value.name}` : value}</label>
        </li>
      ))}
    </ul>
  );
}
