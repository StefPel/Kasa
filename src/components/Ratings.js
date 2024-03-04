import React from 'react';

// Composant fonctionnel Ratings qui prend une prop "rating"
const Ratings = ({ rating }) => {
  const stars = []; // Tableau pour stocker les étoiles

  // Boucle pour générer les étoiles en fonction de la prop "rating"
  for (let i = 1; i <= 5; i++) {
    // Détermine la classe CSS pour chaque étoile en fonction de la prop "rating"
    const starClass = i <= rating ? 'fa-solid fa-star' : 'fa-solid fa-star star-inactive';
    stars.push(<i key={i} className={starClass}></i>); // Ajoute l'élément <i>, avec la classe correspondante, au tableau "stars à chaque itération de la boucle"
  }

  return <div className="rating">{stars}</div>; // Retourne un élément contenant les étoiles générées
};

export default Ratings;