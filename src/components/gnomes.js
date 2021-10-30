import React from "react";

const Gnome = ({
  id,
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  profesions,
  friends,
}) => (
  <div className="gnome">
    <img src={thumbnail} alt={name} />
    <div className="gnome-name">
      <h3>{name}</h3>
    </div>
    <div className="gnome-info">
      <h3>Gnome information</h3>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>Hair color: {hair_color}</p>
      <p>Profesions: {profesions}</p>
      <p>Friends: {friends}</p>
    </div>
  </div>
);

export default Gnome;
