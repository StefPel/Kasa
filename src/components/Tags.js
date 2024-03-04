import React from 'react';

// Composant fonctionnel Tags qui prend une prop "content"
const Tags = ({ content }) => {
  return <p className='tag'>{content}</p>;
};

export default Tags;