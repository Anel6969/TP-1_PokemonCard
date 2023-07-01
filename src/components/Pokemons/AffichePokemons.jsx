import React, { useState } from 'react';
import './Pokemons.css'

const AffichePokemons = ({ name, image, abilities }) => {
  const [afficheAbilities, setAfficheAbilities] = useState(false);

  const handleMouseOver = () => {
    setAfficheAbilities(true);
  };

  const handleMouseOut = () => {
    setAfficheAbilities(false);
  };

  return (
    <div
      className="pokemons"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h2>{name}</h2>
      <img src={image} alt={name} />
      
      {afficheAbilities && (
        <ul>
            <h2>Abilties</h2>
          {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AffichePokemons;
