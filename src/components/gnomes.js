import React from "react";

const Gnome = ({ id, name, thumbnail }) => (
  <div className="gnome">
    <img src={thumbnail} alt={name} />
    <div className="gnome-name">
      <h3>{name}</h3>
    </div>
  </div>
);

export default Gnome;
