import React from "react";

function Banner({ imageUrl, text, isMobile }) {
  return (
    <div className={`banner ${isMobile ? 'styleMobile' : ''}`}>
      {/* Div principale de la bannière avec une classe "banner" et une classe "styleMobile" si isMobile est true */}
      <div className="image-container">
        <img src={imageUrl} alt="Bannière" className={`${isMobile ? 'styleMobile' : ''}`} />
        {/* Image avec une classe "styleMobile" si isMobile est true, pour appliquer des styles spécifiques au format mobile */}

        <div className="text-overlay">
          <h2>{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default Banner;