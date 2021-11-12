import React from "react";

function reduceToString(previous, current) {
  return `${previous}, ${current}`;
}

const Gnome = ({
  id,
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  professions,
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
      {professions.length > 0 ? (
        <p>Professions: {professions.reduce(reduceToString)}</p>
      ) : (
        <p>This gnome has no profession</p>
      )}
      {friends.length > 0 ? (
        <p>Friends: {friends.reduce(reduceToString)}</p>
      ) : (
        <p>This gnome has no friends</p>
      )}
      <p>Gender: {Math.random() > 0.5 ? "Male" : "Female"}</p>
    </div>
  </div>
);

export default Gnome;
