import React, { useState } from 'react';
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';

const Carrousel = ({ housingData }) => {
   // Utilisation de useState pour gérer l'index de l'image actuellement affichée
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    // Fonction pour afficher l'image précédente
    setCurrentImageIndex((index) => (index === 0 ? housingData.pictures.length - 1 : index - 1));
  };

  const nextImage = () => {
    // Fonction pour afficher l'image suivante
    setCurrentImageIndex((index) => (index === housingData.pictures.length - 1 ? 0 : index + 1));
  };

  const currentImage = housingData.pictures[currentImageIndex];
  //variable pour afficher l'image actuelle dans le carrousel
  const imageCount = housingData.pictures.length;
  //variable pour savoir le nombre d'image qu'il y a dans le tableau

  if (imageCount === 1) {
    // Si le carrousel ne contient qu'une seule image, l'afficher sans la pagination et les flèches.
    return <img src={currentImage} alt={housingData.title} className='img_alone' />;
  }

  const displayImageCount = `${currentImageIndex + 1}/${imageCount}`;

  return (
    <div className="carrousel_container">
      <img src={currentImage} alt={housingData.title} />

      {/* Affichage de la pagination */}
      <div className="pagination">{displayImageCount}</div>

      {/* Boutons de navigation */}
      <div>
        <img className="arrow_left" src={arrowLeft} alt="précédent" onClick={previousImage} />
        <img className="arrow_right" src={arrowRight} alt="suivant" onClick={nextImage} />
      </div>
    </div>
  );
};

export default Carrousel;