import React from "react";

const Gnome = ({ id, name, thumbnail }) => (
  <div className="gnome">
    <img src={thumbnail} alt={name} />
  </div>
);

export default Gnome;
