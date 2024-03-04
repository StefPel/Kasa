import React from 'react';

const Host = ({ hostData }) => {
  return (
    <div>
      <div className='host'>
        {/* Affiche le nom du propriétaire du bien grâce à la prop "hostData" */}
        <p>{hostData.name}</p>
        
        {/* Affiche l'image du propriétaire */}
        <img src={hostData.picture} alt={hostData.name} />
      </div>
    </div>
  );
};

export default Host;