import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <main className='main_error'>
      <h1>404</h1>
      <p className='text_error'>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="link_error">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </main>
  );
};

export default Error;