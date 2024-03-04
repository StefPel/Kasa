import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import jsonData from '../datas/housingData.json';
import Carrousel from './Carrousel';
import Tags from './Tags';
import Host from './Host';
import Ratings from './Ratings';
import Collapse from '../components/Collapse';

const ContentHousing = () => {
  // Récupère le paramètre d'URL "id" à l'aide de useParams()
  const { id } = useParams();

  // Recherche les données du logement correspondant à l'id dans le fichier JSON
  const housingData = jsonData.find((el) => el.id === id);

  // Vérifie si les données du logement existent, sinon redirige vers la page 404
  if (!housingData) {
    return <Navigate to="/Page404" />;
  }

  return (
    <main className='contentHousing'>
      {/* Composant Carrousel pour afficher les images du logement */}
      <Carrousel housingData={housingData} />

      <div className="columns_housing">
        <div>
          <h1>{housingData.title}</h1>
          <p>{housingData.location}</p>

          {/* Affiche les tags du logement */}
          <div className="tags">
            {housingData.tags.map((tag, index) => (
              <Tags key={index} content={tag} />
            ))}
          </div>
        </div>

        <div className='column2'>
          {/* Affiche les informations sur l'hôte */}
          <Host hostData={housingData.host} />

          {/* Affiche les étoiles du logement */}
          <Ratings rating={housingData.rating} />
        </div>
      </div>

      <div className="collapse_housing">
        {/* Composant Collapse pour afficher la description du logement */}
        <Collapse title="Description" content={housingData.description} />

        {/* Composant Collapse pour afficher les équipements du logement en colonne */}
        <Collapse title="Equipements" content={housingData.equipments} isColumn={true} />
      </div>
    </main>
  );
};

export default ContentHousing;