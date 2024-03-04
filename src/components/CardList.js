import React from 'react';
import { NavLink } from 'react-router-dom';
import housingData from '../datas/housingData.json';

const CardList = () => {
  return (
    <main className='card-list'>
      {/* Div principale pour la liste de cartes */}
      {housingData.map((logement) => (
        <div key={logement.id} className='card'>
          {/* Carte individuelle */}
          <NavLink to={`/logement/${logement.id}`}>
            {/* Lien de navigation vers le détail du logement */}
            <img src={logement.cover} alt={logement.title} />
            <p>{logement.title}</p>
          </NavLink>
        </div>
      ))}
    </main>
  );
};

export default CardList;