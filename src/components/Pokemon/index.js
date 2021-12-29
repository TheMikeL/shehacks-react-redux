import React from "react";

import "./Pokemon.scss";

const User = ({ pokemon }) => {
  const { name, sprites, weight } = pokemon;
  return (
    <>
      {pokemon.name ? (
        <>
          <img src={sprites?.front_default} />
          <h3 className="name">Name: {name}</h3>
          <p className="weight">Weight: {weight}</p>
        </>
      ) : (
        <p> Please search a pokemon!</p>
      )}
    </>
  );
};

export default User;
