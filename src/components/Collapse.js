import React, { useState } from 'react';
import iconCollapse from '../assets/arrow_collapse.png';

function Collapse({ title, content, isColumn }) {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture et la fermeture du Collapse
  const [iconRotation, setIconRotation] = useState(''); // État pour gérer la rotation de l'icône

  /**
   * Fonction pour basculer l'état d'ouverture/fermeture du Collapse et gérer la rotation de l'icône.
   */
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Inverse la valeur de isOpen (ouverture/fermeture)
    setIconRotation(isOpen ? 'reverse' : 'rotate'); // Change la classe CSS pour la rotation de l'icône en fonction de isOpen
  };

  const collapseContentClass = `collapse_content ${isColumn ? 'column_equipment' : ''} ${isOpen ? 'open' : 'close'}`;

  return (
    <div className="collapse">
      <div className="collapse_header">
        <h2>{title}</h2> 
        <button className={`icon_collapse ${iconRotation}`} onClick={toggleCollapse}>
          <img src={iconCollapse} alt="Icône flèche de l'accordéon" /> 
        </button>
      </div>
      <div className={collapseContentClass}>
        {/* Si le contenu est une colonne, affiche une liste */}
        {isColumn ? (
          <ul> 
             {/* Génère les éléments de la liste à partir du tableau de la prop content */}
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p> 
        )} {/* Si le contenu n'est pas une colonne, affiche un paragraphe */}
      </div>
    </div>
  );
}

export default Collapse;